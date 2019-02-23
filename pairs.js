const array = [1,5,3,4,2]

const sortedArray = array.sort((a,b)=>b-a)
console.log(sortedArray)

function countPairs(n){
    let pairs = 0
    for (i=0;i<sortedArray.length;i++){
        for (j=1;j<sortedArray.length;j++){
            if (sortedArray[i] - sortedArray[j] === n){
                pairs ++
            }
        
        }

    }
    console.log(pairs)
}

countPairs(2)