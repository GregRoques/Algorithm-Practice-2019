// reverse a string

// var string = "Lil' Nacheaux"
// var array = string.split("")

// var reverse2 =[]
// for (i = array.length-1; i>=0; i--){
//     reverse2.push(array[i])
// }

// var reverseString2 = reverse2.toString()
// console.log(reverseString2)

// var reverse = array.reverse()
// var reverseString = reverse.toString()
// console.log(reverseString)
// ============================================================

// DNA



function dnaValue(a,b,c){
    const dna=[
        {'a':1},
        {'b':2},
        {'c':3},
        {'aa':4},
        {'d':5},
        {'b':6}
    ]

    let newDna =[]
    for (i=a;i<=b;i++){
        newDna.push(dna[i])
    }
    console.log(newDna.length)
    console.log(c.length)
    // console.log(Object.keys(newDna[3]))
    // console.log(Object.values(newDna[3]))

    let totalHealth = 0
    for (j=0;j<newDna.length;j++){
            if (Object.keys(newDna[j])== 'a' || Object.keys(newDna[j])==  'b' || Object.keys(newDna[j]) == 'c' || Object.keys(newDna[j])=='d'){
                for (i=0;i<c.length;i++){
                    if(Object.keys(newDna[j]) == c[i]){
                        totalHealth += parseInt(Object.values(newDna[j]))
                    }
                }
            } else if (Object.keys(newDna[j])=='aa'){
                for (i=0;i<c.length;i++){
                    if(Object.keys(newDna[j]) == (c[i]+c[i+1])){
                        totalHealth += parseInt(Object.values(newDna[j]))
                }    
            }

        

    }
    
}
console.log(totalHealth)
}

dnaValue(2,4,'bcdybc')





 