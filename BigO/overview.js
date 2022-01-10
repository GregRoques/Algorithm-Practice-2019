// ==================================== Reviewing Sorted Lists

// console.log("Sanity Check");
// guess a number
// – loop through all


// let numberList = [1,2,3,4,5]
// let number = (Math.floor(Math.random() * numberList.length))

// for(let i= 0; i <numberList.length; i++){
//     if (numberList[i] === number){
//         console.log("Found!", number)
//         console.log(`It took ${i +1} guesses to get the answer`)
//         break
//     }
// }

// // guess randomly...NOT a good option
// let found = false;
// let counter =0;
// while (!found){
//     counter++
//     let ranIndex = Math.floor(Math.random()*numberList.length);
//     if (numberList[ranIndex]==number){
//         found = true;
//         console.log("Horray! We finished! The number was", number);
//         console.log(`It took ${counter} guesses.`);
//     }
// }

// ==================================================================== Binary Search

// found = false;
// let index = (Math.floor(numberList.length/2));
// while (!found){
//     if(number === numberList[index]){
//         console.log(`Number was`,numberList[index])
//         found = true;
//     } else if(number <numberList[index]){
//         // cut off the top half by moving the index to the middle of the lower half
//         index = Math.floor(index/2);
//         console.log(`Number is lower.`)
//     } else{
//         // we know it is higher
//         index = Math.floor((index+numberList.length)/2)
//         console.log(`Number is higher.`)
//     }
// }

// function binarySearch(list, value){
//     // we will set a range or bounds to check. This will get smaller as we guess
//     let bottomIndex = 0;
//     let topIndex = list.length -1;
//     let middleIndex = Math.floor((topIndex+bottomIndex)/2)
//     console.log(bottomIndex, topIndex, middleIndex)

//     // keep looping while the middle is not the correct number and there isn't only one left
//     let counter = 0
//     found = false;
//     while (!found){
//         counter ++
//             if(value<list[middleIndex]){
//                 bottomIndex = middleIndex - 1;
//             }else if(value >list[middleIndex]){
//                 bottomIndex = middleIndex +1
//         } else {
//             found = true;
//         }
//         // must recalculate middle because we change the top or bottom
//         middleIndex = Math.floor((topIndex+bottomIndex)/2);
//     }
//     console.log(`It took ${counter} guesses.`)
//     return middleIndex;
// }

// let numbers = []
// for (let i=0; i < 1000; i++){
//     numbers.push(i);
// }
// binarySearch(numbers,98);

// ============================================= Bubble Sort
let unsorted = [5,2,6,3,1,3]
let sort = true
while(sort) {
  sort = false;
  for (i = 0; i < unsorted.length; i++){
    if (unsorted[i] > unsorted[i + 1]){
      let first = unsorted[i]
      unsorted[i] = unsorted[i + 1]
      unsorted[i + 1] = first
      console.log(unsorted)
      sort = true
    }
  }
}

// ================================================= insertion sort

for (let i = 0; i < unsorted.length; i++){
    let first = unsorted[i]
    let j = i - 1
    while (j >= 0 && unsorted[j] > first){
        unsorted[j + 1] = unsorted[j]
        j--
    }
    unsorted[j + 1] = first
    console.log(unsorted)
        
}
