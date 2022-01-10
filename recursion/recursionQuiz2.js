const reverse = (word) =>{

    let recursiveLength = word.length - 1
    let initialArray = word.split("")
    // console.log(initialArray)
    let backwardsWord = []

    const recursiveReversal = (count) =>{
        if (count<0) return backwardsWord.join("");
        backwardsWord.push(initialArray[count]);
        recursiveReversal(count-1);
    }
    recursiveReversal (recursiveLength);
    console.log(backwardsWord.join(""))
}

reverse("awesome")

// =====================================================================================================================

const isPalindrome = (word) =>{

    let recursiveLength = word.length - 1
    let initialArray = word.split("")
    // console.log(initialArray)
    let backwardsWord = []

    const recursiveReversal = (count) =>{
        if (count<0) return backwardsWord.join("");
        backwardsWord.push(initialArray[count]);
        recursiveReversal(count-1);
    }
    recursiveReversal (recursiveLength);
    console.log(backwardsWord.join("") === word)
}

isPalindrome("tacocat")

// =====================================================================================================================

const someRecursive = (myArray,myFunction) => {

    if(myArray.length === 0){ 
        console.log(false)
        return false;
    }
    if(myFunction(myArray[0])){
        console.log(true);
        return true;
    }
    someRecursive(myArray.slice(1),myFunction)
}

const isOdd = val => val % 2 !==0;

someRecursive([4,6,8], isOdd)

// isOdd(3)


// =====================================================================================================================

let newArray = [];
const flatten = (arr) => {
    if (arr.length === 0) return newArray;
        let num = arr.shift();
    if(Array.isArray(num)){
        arr.push(...num)
    } else {
        newArray.push(num)
    }
    flatten(arr)
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])

console.log(newArray)

// =====================================================================================================================

let capArray = []
const capitalizeFirst = (lowerCaseString) => {
    if(lowerCaseString.length === 0) return capArray;
    let word = lowerCaseString.shift()
    capArray.push(word.replace(/^./, word[0].toUpperCase())); 
    capitalizeFirst(lowerCaseString)
}
capitalizeFirst(['car','taco','banana'])
console.log(capArray)

// =====================================================================================================================

let capWords = []
const capitalizeWords = (capArray) => {
    if (capArray.length === 0) return capWords;
    let currWord = capArray.shift();
    capWords.push(currWord.toUpperCase())
    capitalizeWords(capArray)
}
let theseWords = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(theseWords); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capWords)

// =====================================================================================================================
