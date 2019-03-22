const arrays =[
    [1,2,3],
    [4,5,6],
    [24,8,11]
]

let right = 0
let countdown = arrays[0].length - 1

const rightToLeft =  arrays.map((arr)=>{
    // console.log(arr[countdown])
    right += arr[countdown]
    countdown -=1
})
// console.log(right)

let left = 0
let countUp = 0
const leftToRight = arrays.map((arr)=>{
    // console.log(arr[countUp])
    left += arr[countUp]
    countUp +=1
})
// console.log(left)

let AbsoluteDifference = Math.abs(left - right)

console.log(left, right, AbsoluteDifference)