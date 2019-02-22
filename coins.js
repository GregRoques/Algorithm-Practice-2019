const coins = [
    {quarter:25},
    {dime:10},
    {nickel:5},
    {penny:1}
]

let coinCount = {
    quarter:0,
    dime:0,
    nickel:0,
    penny:0
}



function fewestCoins(cost){
    for (let i =0;cost > 0;i ){
        let currentCoin = Object.values(coins[i])
        let currentCoinName = Object.keys(coins[i])
        if (currentCoin <= cost){
            cost -= currentCoin
            console.log(cost)
            console.log(currentCoin)
            coinCount[currentCoinName] ++
            
        }else{
            i++
        }
    }
    console.log(coinCount)
}

fewestCoins(29)