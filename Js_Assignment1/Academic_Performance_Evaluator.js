let arr = [75,82,99,81,90]
let total = 0
let hasfail = false
for(let num of arr){
    total += num
    if (num < 35) {
            hasfail = true;
            break;
    }
}
let average = total/arr.length
let percentage = total/arr.length

if(hasfail){
    console.log("Detained")
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction")
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted")
} else {
    console.log("Detained")
}


