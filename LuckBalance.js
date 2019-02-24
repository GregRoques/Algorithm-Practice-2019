// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

const contests=[
    {5: 1},
    {2: 1},
    {1: 1},
    {8: 1},
    {10: 0},
    {5: 0}
]

// Sorted List of Important Contests
const importantContests = []
for (i=0;i<contests.length;i++){
    if (Number(Object.values(contests[i])) === 1){
        importantContests.push(Number(Object.keys(contests[i])))
    }
}
const sortedImportantContests = importantContests.sort()

// console.log(sortedImportantContests)

// Find Luck
let luck = 0

// Unimportant Contests
for (i=0;i<contests.length;i++){
    if (Number(Object.values(contests[i])) === 0){
        luck += Number(Object.keys(contests[i]))
    }
}

// console.log(sortedImportantContests.length)

// important Contests

for (i=0;i < sortedImportantContests.length;i++){
    if (i === 0){
        luck -= sortedImportantContests[i]
    } else{
        luck += sortedImportantContests[i]
    }
}

// solution
console.log(luck)




