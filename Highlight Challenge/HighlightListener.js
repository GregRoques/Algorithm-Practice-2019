const input = document.querySelector("input");
input.addEventListener("input", search);

const idType = "text";
let prevSearched;
let count = 0;

function search(e) {
  const text = document.getElementById(idType).innerHTML;
  const searched = e.target.value.trim();

  if (searched.length > 2) {
    let noHighlight = text;

    if (text.includes(`<mark>${prevSearched}</mark>`)) {
      const erase = new RegExp(`<mark>${prevSearched}</mark>`, "g");
      noHighlight = text.replace(erase, prevSearched);
    }

    let newText = noHighlight;
    count = 0;
    if (newText.includes(searched)) {
      const newHighlight = new RegExp(searched, "g");
      newText = noHighlight.replace(newHighlight, `<mark>${searched}</mark>`);
      count = noHighlight.match(newHighlight).length;
    }

    document.getElementById(idType).innerHTML = newText;
  }

  if (searched.length <= 2 && prevSearched !== "") {
    count = 0;
    const erase = new RegExp(`<mark>${prevSearched}</mark>`, "g");
    const removedHighlight = text.replace(erase, prevSearched);
    document.getElementById(idType).innerHTML = removedHighlight;
  }

  displayCount(count);
  prevSearched = searched;
}

function displayCount(count) {
  if (count) {
    document.getElementById("count").innerHTML = `<br/><b>Found:</b> ${count}`;
  } else {
    document.getElementById("count").innerHTML = "";
  }
}
