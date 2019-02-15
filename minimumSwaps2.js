array =[4,1,2,3]
sortedArray=[]

for (i=1;i<=array.length;i++){
    sortedArray.push(i)
}


let difference = 0
for (i=1; i<=array.length; i++){
    if (array.indexOf(i) != sortedArray.indexOf(i)){
        if (array.indexOf(i) < sortedArray.indexOf(i)){
            difference += (sortedArray.indexOf(i) - array.indexOf(i))
        }else{
            difference += (array.indexOf(i) - sortedArray.indexOf(i))
        }
    }
}
console.log(difference)