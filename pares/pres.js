
// Solução 1
function isEven(arr) {
    if (!arr.length || typeof arr !== "object" || !arr) return -1;


    let evens0 = arr.map((item) => {
        
        if (item % 2 === 0) {
            item = 0;
        }
        return item;

    })

    return evens0;
}

console.log(isEven([]))



// Solução 2
function isEven2(arr) {

    if (!arr.length || typeof arr !== "object" || !arr) return -1;

    let arr2 = [];
    for (let i of arr) {
        if (typeof i !== "number") {
            return -1;
        }
        if (i % 2 === 0) {
            i = 0;
        }
        arr2.push(i);
    }

    return arr2;
}

console.log(isEven2([]))