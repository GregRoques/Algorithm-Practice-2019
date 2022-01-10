// Find the longest word in a string
// the first index in the string will be the number of words it containts
// return the longest word consisting of other words in the string
// if there are 2 words that are the same length, just return the first one

var inputData = `7
test
tester
Phenomenologically
testertest
testing
TestingTester
testingtester`

const inputSplit =  inputData.split('\n')
const count = inputSplit[0]
const inputArr = inputSplit.splice(1,count)

let longestWord = "";

inputArr.map((word, i) =>{
    
   for(index = i +1; index < count; index++){
       if(inputArr[index].toLowerCase().includes(word.toLowerCase()) && word.length > longestWord.length){
        longestWord = word
    }
   }
})


console.log(longestWord || "None")
