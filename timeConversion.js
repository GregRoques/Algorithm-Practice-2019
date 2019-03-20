// Convert from standard to military time

let AM = new RegExp("AM")
let PM = new RegExp("PM")
let newTime
function GIJoeTime(civilianTime){
    if ( AM.test(civilianTime)){
        newTime = civilianTime.replace('AM','')
        console.log(newTime)
    }else if ( PM.test(civilianTime)){
        let PMstring  = (civilianTime.replace('PM','')).split(":")
        let hour = parseInt(PMstring[0])
        console.log(hour)
        if (hour < 12){
            hour+= 12
            PMstring[0] = hour
        }else{
            hour === 0
            PMstring[0] = 0
        }
        newTime = PMstring.join(':')
        console.log(newTime)
    }
}

GIJoeTime("12:30:02 AM")