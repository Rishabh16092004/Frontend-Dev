let expanses = [5000,2000,6000,2000,1500]
let total = 0
for(let amount of expanses){
    total += amount;
}
let tax = total*0.10
let finalamount = total+tax

let average = total/expanses.length

console.log("Total expanse ",total.toFixed(2))
console.log("Average ",average.toFixed(2))
console.log("Final amount after tax ",finalamount.toFixed(2))

