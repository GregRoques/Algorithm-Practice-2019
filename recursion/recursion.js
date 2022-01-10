// recursion - a function that calls itself

    // when a function is called, it is placed on the top of the "call stack"
        // when a function ends, the compiler will remove (pop)
            // check Call Stack window in Chrome Dev Tools – Source
    
    // Recursive functions continue to push the same function continuously onto the call stack
    // we invoke the same function with different input until we reach the base case
        // the Base Case is the condition when the recursion ends...this is the most important 
        // part of the recursive statement

// ==============================================================================================

// 2 Essential parts of any recursive statement:
    // 1) Base case
    // 2) Different Input

// ==============================================================================================

// ================ Ex:

// function countDown(num){
//     if (num <=0){
//         console.log("BOOM...recursion!");
//         return;
//     }
//     console.log(num)
//     num--;
//     countDown(num)
// }

// countDown(5)

// ================ EX 2:

// let k = 0
// function sumRange(num){
//     k += num
//     console.log(k)
//     if(num === 1) return 1; //1 is our Base Case
//     return num + sumRange(num - 1);

    
    
// }

// sumRange(3)
//     // breakdown:
//         // not 1, so...
//             // return 3 + sumRange(2) + sumRange(1)

// ================ EX 3:

// Factorial: 4! ... is equal to 4 x 3 x 2 x 1 ... a countdown

// let k = 1
// function factorial(num){
//     k *= num
//     console.log(k)
//     if (num===1) return 1; // ends the factorial. Since 1 x 1 is itself, no reason to multiply by one.
//     return num * factorial(num-1)
// }

// factorial(10)

// ================ EX 4:

    // Example of a common pitfall

    // function factorial(num){
    //     if (num===1) return 1; // cannot use console.log here...must return 1 to break the cycle
    //     return num * factorial(num);
    // }

    // factorial(2); //in this case, we never hit our base case because it keeps returning 2 forver

    // Common mistakes:
    //     1) No Base Case
    //     2) Forgetting to return or returning the wrong thing
    //     3) Stack Overflow! ... too many functions on a stack, a stack overflow.
                //stack overflow usually a result of a recursive call




// ================================================================== Helper Method Recursion

    // with this method, we place a recursive function inside an outer, "helper" function that 
    // we call

// ================ EX 5:
    // let's collect all the odd numbers in an array

//     function collectOddNums(arr){

//         let result = [];

//         function helper(helperINput){

//             if(helperINput.length===0){
//                 return;
//             }

//             if(helperINput[0] % 2 !== 0){
//                 result.push(helperINput[0])
//             }

//             helper(helperINput.slice(1))

//         }

//     helper(arr)

//     console.log(result)

// }

// collectOddNums([1,2,3,4,5,6,7,8,9])
    
// ================================================================== Helper Method Recursion

// ================ EX 6:

function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    console.log(newArr);
}

collectOddValues([1,2,3,4,5])

// PRO TIP: for arrays, always use methods like
    // slice, concat, etc.
// that make copies of arrays so that you do not mutate them
    // to make copies of objects, use Object.assign or the spread operator


