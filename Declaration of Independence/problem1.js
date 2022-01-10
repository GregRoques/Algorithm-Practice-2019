// Find the 100 most common words in the Declaration of Independence -- excluding "of", "the", "to", "and", and "for" --
// and export the results, count value first, in csv format

const fs = require("fs");
require.extensions[".txt"] = function (module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};

let doi = require("./DeclarationOfIndependance.txt").toLowerCase();

let doiWords = doi
  .replace(/[^a-z0-9\s]/g, "")
  .replace(/(\sof\s)|(\sthe\s)|(\sto\s)|(\sfor\s)/g, " ")
  .replace(/\s+/g, " ");

let doiArray = doiWords.split(" ").sort();

let doiObject = {};

doiArray.map((word) => {
  if (Object.keys(doiObject).includes(word)) {
    doiObject[word] += 1;
  } else {
    doiObject[word] = 1;
  }
});

const doiSortedArray = Object.keys(doiObject).sort((a, b) => {
  return doiObject[b] - doiObject[a];
});

let csv = "";

for (var i = 0; i < 100; i++) {
  const key = doiSortedArray[i];
  const value = doiObject[key].toString();
  csv += `${value} , ${key}\n`
}
console.log(csv)

