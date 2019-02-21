let mag = "ive got a lovely bunch of coconuts"
let ransom = "ive got some coconuts"


function CheckMagazine(magazine, note){
    const magArray = magazine.split(" ")
    let magazineMap = new Map()

    for (i=0; i<magArray.length;i++ ){
        magazineMap.set(i, magArray[i])
    }

    const noteArray = note.split (" ")
    let noteMap = new Map()

    for (i=0; i<noteArray.length;i++ ){
        noteMap.set(i, noteArray[i])
    }
    console.log(noteMap)
    
    let count= 0
    for (let [key,value] of noteMap.entries()){
        for( let [key2, value2] of magazineMap.entries())
        if (magazineMap.get(key2) === noteMap.get(key)){
            magazineMap.delete(key, value);
            noteMap.delete(key, value);
        }
    }

    if (0 === noteMap.size){
        console.log('yes')
        
        }else{
            console.log("no")
            console.log(noteMap)
        }

    }
    


CheckMagazine(mag, ransom)