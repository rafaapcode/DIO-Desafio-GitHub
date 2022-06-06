const doleta = {
    value: 4,
}

const euro = {
    value: 5,
}

function mapComThis(arr, thisarg) {

    return arr.map(function (item) { return item * this.value }, thisarg);

}

let numeroARR = [20, 87, 66, 55];

console.log("This -> DOLETA", mapComThis(numeroARR, doleta));

console.log("This -> EURO", mapComThis(numeroARR, euro));

// ----------------------------------------------------------------------

const multPlicadorNumb = {
    mults: [0, 10, 7, 5, 4]
}

let numeroParaARR = [2, 10, 5, 7];

function mapcomthis(arr, obj) {

    return arr.map(function (item) {
        let numMult = this.mults.reduce((acc, value) => acc + value);

        return item * numMult;

    }, obj);

}

console.log("Array no OBJ -> ", mapcomthis(numeroParaARR, multPlicadorNumb));

// ---------------------------------------------------------------------------

function mapSemThis(arr){
    return arr.map(item => {
        return item * 2;
    });
}

console.log(mapSemThis(numeroARR))