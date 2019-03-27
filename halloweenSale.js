
const halloweenSale = ((p,d,m,s) =>{

    let yourCash = s;
    let discount = d
    let gameCost = p;
    let gameNum = 0;

    while ((yourCash - gameCost) > 0) {
        if(gameNum === 0){
            yourCash -= gameCost;
            gameNum ++;
        } else if (gameNum > 0 && gameCost >= m ){
            gameCost -= discount;
            yourCash -= gameCost;
            gameNum++;
        } else {
            yourCash -= gameCost;
            gameNum++
        }
        console.log(`Cash Left: ${yourCash}; Final Price: ${gameCost}; Total Games: ${gameNum}`)
    } 
        
    
})

halloweenSale(20,3,6,85)