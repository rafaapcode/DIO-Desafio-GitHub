let tste = [5, 6, 7];
let tste2 = [3, 6, 10];

function compareTriplets(a, b) {
    // Write your code here
    let scoreA = 0;
    let scoreB = 0;
    let finalArray = [];

    if (a[0] > b[0]) {
        scoreA += 1;
    }
    if (a[1] > b[1]) {
        scoreA += 1;
    }
    if (a[2] > b[2]) {
        scoreA += 1;
    } else {
        scoreA += 0;
    }


    if (b[0] > a[0]) {
        scoreB += 1;
    }
    if (b[1] > a[1]) {
        scoreB += 1;
    }
    if (b[2] > a[2]) {
        scoreB += 1;
    } else {
        scoreB += 0;
    }

    finalArray.push(scoreA, scoreB);

    return finalArray
}

console.log(compareTriplets(tste, tste2));


