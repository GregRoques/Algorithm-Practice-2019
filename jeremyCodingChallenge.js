// let fib = [1,1,2,3,5,8,13,21,34];

// for (let i = 0; i < 10;i++){
//     let currNum = fib[fib.length - 1] + fib [fib.length -2];
//     fib.push(currNum);
// }

// console.log(fib)

// ============================================================

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let fib = [1,1]
let currNum = 0

while (currNum < 27){
    currNum = fib[fib.length - 1] + fib [fib.length -2];
    fib.push(currNum);
}

for (i = 0; i < fib.length; i++){
    console.log(alphabet[fib[i]])
}

