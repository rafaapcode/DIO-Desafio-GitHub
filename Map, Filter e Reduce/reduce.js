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



const lista = [

    {
        chuteira: "Nike",
        preco: 520
    },
    {
        chuteira: "Adidas",
        preco: 520
    },

    {
        chuteira: "Mizuno",
        preco: 340
    },

    {
        chuteira: "Umbro",
        preco: 200
    },
    {
        chuteira: "Dray",
        preco: 60
    },
    {
        chuteira: "Puma",
        preco: 270
    },

]

function restoSaldo(arr, saldoDisponivel) {

    // Ele vai pegar cada elemento do nosso ARRAY, por isso uso arr
    return arr.reduce((prev, current) => {

        // Current sera os nosso OBJs, por isso precisamos selecionar o preco dos nosso OBJs;
        // Prev vai ser o saldoDisponivel, ou seja o valor que eu passar
        return prev - current.preco;

    }, saldoDisponivel);

}

console.log(restoSaldo(lista, 3500));