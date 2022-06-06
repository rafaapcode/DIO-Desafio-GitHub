const numeros = [88, 1, 87, 9, 3, 49, 83, 66, 60];

function eveNumbers(arr) {
    return arr.filter(callback);
}

// Externalizei o nosso callback, para uma função fora do método;
const callback = (item) => item % 2 === 0;

console.log(eveNumbers(numeros));
