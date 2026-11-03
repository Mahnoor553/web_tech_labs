//Task 1
function addition(a, b) {
    return a + b;
}

console.log(addition(5, 3));
console.log(addition(10, 20));
console.log(addition(-4, 6));

//Task 2
function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}

function bitwiseXOR(a, b) {
    return a ^ b;
}

console.log(bitwiseAND(7, 5));
console.log(bitwiseOR(7, 5));
console.log(bitwiseXOR(7, 5));

//Task 3
function addUp(a) {

    let sum = 0;

    for (let i = 1; i <= a; i++) {
        sum += i;
    }

    return sum;
}

console.log(addUp(4));
console.log(addUp(10));
console.log(addUp(1));


function progressBar(a) {

    let filled = Math.floor(a / 10);
    let empty = 10 - filled;

    return "#".repeat(filled) + "-".repeat(empty);
}

console.log(progressBar(10));
console.log(progressBar(40));
console.log(progressBar(49));
console.log(progressBar(75));
console.log(progressBar(100));

//Task 5
function minMax(arr) {

    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);

    return [minimum, maximum];
}
console.log(minMax([1, 2, 3, 4, 5, 6]));
console.log(minMax([10, 50, 20, 8]));
console.log(minMax([-5, 2, 10, -1]));

//Task 6
function calculateRepoStats(repos) {

    let stars = repos.map(repo => repo.stars);

    let maxStars = Math.max(...stars);
    let minStars = Math.min(...stars);

    let total = stars.reduce((sum, value) => sum + value, 0);

    let avgStars = Math.floor(total / stars.length);

    let varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}

let repos = [
    { name: "repo-a", stars: 12 },
    { name: "repo-b", stars: 45 },
    { name: "repo-c", stars: 3 }
];

console.log("\nTask 6");
console.log(calculateRepoStats(repos));

//Task 7
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {

    let discountedPrice = Number(
        (basePrice * (1 - discountPercentage / 100)).toFixed(2)
    );

    let finalPrice = Number(
        (discountedPrice * (1 + taxRate / 100)).toFixed(2)
    );

    let loyaltyPoints = Math.ceil(finalPrice);

    return {
        discountedPrice,
        finalPrice,
        loyaltyPoints
    };
}

console.log(calculateFinalPrice(1000, 15, 10));
//Task 8

function paginateData(items, pageNumber, pageSize = 5) {

    let start = (pageNumber - 1) * pageSize;
    let end = start + pageSize;

    let data = items.slice(start, end);

    let totalPages = Math.ceil(items.length / pageSize);

    return {
        data,
        currentPage: pageNumber,
        totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1
    };
}


let allProducts = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Desk",
    "Chair",
    "Webcam",
    "Headphones"
];

console.log(paginateData(allProducts, 2, 3));