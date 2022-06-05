const jogador = {
    nome: "Joca",
    posicao: 'ME',
    idade: 21,
    conquistas: {
        primeiroGol: true,
        centesimoGol: false,
        goldeBicicleta: false,
        UCL: true,
        Libertadores: true,
        copaDoMundo: false,
        selecao: false
    },
    nacionalidade: "Brasil"
}

const { idade, conquistas: { UCL: ucl, Libertadores: liberta } , posicao} = jogador;

function ganhouUCL(ucl){

   let win = ucl ? console.log("Parabens pela Conquista") : console.log("Não foi dessa vez");

   return win;
}

ganhouUCL(ucl);

function jogouNaAmericaDoSul(camp){
    let jogou = camp ? true : false;

    return jogou;
}

console.log(jogouNaAmericaDoSul(liberta));