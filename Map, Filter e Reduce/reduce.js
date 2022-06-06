function reduceSeminitialValue(arr) {

    const callback = (acc, value) => acc + value;

    return arr.reduce(callback);

}

const arr = [02, 98, 74, 1.5, 105, 65];

console.log(reduceSeminitialValue(arr));

// ---------------------------------------------------------------------

function calcSaldo(arr, saldoDisponivel) {

    let saldoFinal = arr.reduce(callback, saldoDisponivel);

    return saldoFinal < 0 ? "Dinheiro Insuficente" : "Parabéns pela Compra";

}

function callback(acc, value) {
    return acc - value;
}

const precos = [10, 100.90, 120, 6, 78.50, 7.50];

console.log(calcSaldo(precos, 323));