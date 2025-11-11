let username = "Rishabh Pathak"
let currHour = new Date().getHours()
if(currHour<12){
    console.log("Good Morning ",username);
}
else if(currHour>12 && currHour<17){
    console.log(`Good afternoon ${username}`);
}
else{
    console.log("Good Evening ",username);
}