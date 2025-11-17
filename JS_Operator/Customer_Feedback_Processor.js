let feedback = "Great product! poor delivery and amazing sound quality!"

let words = feedback.split(" ").length;

let hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

if(!hasNegativeWords){
    console.log("Positive Feedback.");
}
else{
    console.log("Needs Improvement");
}

console.log("word count:",words)