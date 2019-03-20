function staircase(value){
    const hashtag = "#"
    const space = " "
    for (let i = 1; i < value; i++ ){
      let j = value - i
      console.log(space.repeat(j), hashtag.repeat(i))
        
    }
}

staircase(6)

// ====================================================================