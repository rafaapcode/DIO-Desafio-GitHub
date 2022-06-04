const person = {
    nome: "Everaldino",
    age: 51
};

const person2 = {
    nome: "Jão da Silva",
    age: 16
};

const person3 = {
    nome: "Rafael",
    age: 19
};

const person4 = {
    nome: "kroos",
    age: 32
};

function calcAge(anos) {

    return `Daqui ${anos} anos, ${this.nome} terá ${this.age + anos} anos de idade !!`;


}

console.log(calcAge.call(person, 5));

console.log(calcAge.apply(person3, [15]));