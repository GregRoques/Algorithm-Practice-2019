// ==================================== Power

// function power(base, exponent){

// let value = 1

//    function powerOf(thePower){
//        if (thePower === 0) return 1;
//        value *=base 
//        powerOf(thePower - 1 )
//    }

//    powerOf(exponent)
//    console.log(value)

// }

// power(2,4)

// ==================================== Factorial


// let value = 1
// function factorial(num){
//     if (num === 1) return 1;
//     value *= num;
//     factorial(num-1);
// }
// factorial(7)
// console.log(value)

// ==================================== ProductOfArray

// let sum = 1

// const ProductOfArray = (arr) =>{

//     if (arr.length === 0) return sum;

//     sum *= arr[0];
//     ProductOfArray(arr.slice(1));

// }

// ProductOfArray([1,2,3,10]);
// console.log(sum)

// ==================================== Recursive Range

// let sum = 0

// function recursiveRange(num){

//     if(num === 0) return sum;

//     sum += num;
//     recursiveRange(num-1);
    
// }

// recursiveRange(10);
// console.log(sum)

// ==================================== Fib

// fibArr = [0,1]


// const fib = (nth) => {
//     if (nth === 0) return 'boom';
//     next = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
//     fibArr.push(next)
//     console.log(fibArr)
//     fib(nth-1)
// }

// fib(35);
// console.log(fibArr[fibArr.length-2])