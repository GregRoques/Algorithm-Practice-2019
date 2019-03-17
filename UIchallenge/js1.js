//  ============================================================== Question 1

function log(level,color){
    let logLevel = {}
   if (level.length === color.length){
       for (i=0;i<=log.length;i++){
            let key = level[i]
            let value = color[i]
            logLevel[key] = value
        }

    function returnMessage(dict,text){
        for (var key in dict){
            let regEx = new RegExp(key)
            if (regEx.test(text)){
                document.getElementById('result').innerHTML=`
                <p style="color:${dict[key]}">
                [${key}] ${text}
                </p>
                `
            }
        }
    }
    // const text = "Here is some info"
    // const text = "This is a warning"
    const text = "This is my debug message"
    returnMessage(logLevel, text)
    }
}

log (['debug','warn','info'], ['orange','red','green'])

