// // ====================================== Question 2


let i = 1;
async function timer(ms){
  
  let promise = new Promise ((resolve,reject)=>{
    setTimeout(()=> resolve(`Log${i} (${ms} ms) called`), ms)
  });

  let result = await promise;
  
  console.log(result);
}

async function log(){
    const log1 = await timer(2500);
    i++;
    const log2 = await timer(1500);
    i++;
    const log3 = await timer(500);
}

log();


