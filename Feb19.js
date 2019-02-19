// const str1="Hello"
// const str2= 'Wolrd'
// let matches=[]

// function twoStrings(string1,string2){
//     for(let i=0;i<string1.length;i++){
//         for (let j=0;j<string2.length;j++){
//             if(string1[i] === string2[j]){
//                 matches.push(string1[i])
//                 string2 = string2.replace('string2[j]', '')
//                 break 
//             }    
//         }
       
//     }
//     console.log(matches);
//     console.log(matches.length);
// }
// twoStrings(str1,str2)

function twoStrings(s1, s2) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let substring = false;
    for (let i = 0; i < alpha.length; i++) {
        let regexCheck = RegExp(`[${alpha[i]}]+`)
        let match1 = regexCheck.test(s1);
        let match2 = regexCheck.test(s2);
        if (match1 == true && match2 == true) {
            substring = true;
        }
    }
    if (substring == true) {
        return ("YES")
    } else {
        return ("NO")
    }
}

