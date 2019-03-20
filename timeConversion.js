// Convert from standard to military time

let AM = new RegExp("AM")
let PM = new RegExp("PM")
let newTime
function GIJoeTime(civilianTime){
    if ( AM.test("AM") ){
        newTime = civilianTime.replace('AM','')
        console.log(newTime)
    }else{
        let PMstring  = (civilianTime.replace('PM','')).split(":")
        if (PMstring[0] < 12){
            PMstring[0]+= 12
        }else{
            PMstring[0] === 0
        }
        newTime = PMstring.join(':')
        console.log(newTime)
    }
}

GIJoeTime("11:30:02 AM")