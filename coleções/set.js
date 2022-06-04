const myarr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUniques(arr){
    const myset = new Set(arr);

    // Aqui estamos usando o SPREAD, então esta pegando CADA elemento do set e colocando no array.
    // ...myset ele corresponde a cada elemento dentro do myset
    return [...myset];
}

console.log(valoresUniques(myarr))