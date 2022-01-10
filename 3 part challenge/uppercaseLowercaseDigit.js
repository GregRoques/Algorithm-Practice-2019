const uppercaseCheck = new RegExp('[A-Z]')
const lowercaseCheck = new RegExp('[a-z]')
const numberCheck = new RegExp('[0-9]')

function solution(s) {
    const c = s[0];
    if (uppercaseCheck.test(c)) {  
        return 'upper';
    } else if (lowercaseCheck.test(c)) {  
        return 'lower';
    } else if (numberCheck.test(Number(c))) {  
        return 'digit';
    } else {
        return "other";
    }
}

var test1 = "Cat"
var test2 = "cat"
var test3 = "3"
var test4 = "*asdf"

console.log(solution(test4))