
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(ar){
    let matchingPair=0
    const arSorted = ar.sort();
    for(let i=0; i<arSorted.length;i++){
        if(arSorted[i] == arSorted[i+1]){
            matchingPair++;
            i++;
        }
    }
    console.log(matchingPair)
}

sockMerchant(ar)