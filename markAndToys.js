// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

const prices =[1,12,5,48, 47, 46, 111,200,1000,10]
let budget = 50
let affordable = []
let purchased = []

for (let i=0;i<prices.length;i++){
    if (prices[i] < budget){
        affordable.push(prices[i])

    }
}

affordable = affordable.sort((a, b) => a - b)
console.log(affordable)

for (let i=0;i<affordable.length;i++){
    if (budget>0){
        budget = budget - affordable[i]
        if (budget > 0){
            purchased.push(affordable[i])
        }
            }
    }
console.log(purchased)
console.log(purchased.length)
