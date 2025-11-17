let rawProductName = "  wireless headphones PRO  ";

let trimmedName = rawProductName.trim();

let lowerCaseName = trimmedName.toLowerCase();

let formattedName = lowerCaseName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

let finalTitle = formattedName.replace("Pro", "Pro Edition");

let titleLength = finalTitle.length;

console.log("Cleaned Product Title:", finalTitle);
console.log("Title Length:", titleLength);
