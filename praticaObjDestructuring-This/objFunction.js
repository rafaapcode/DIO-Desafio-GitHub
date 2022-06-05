const jogador = {
    nome: "Joca",
    posicao: 'ME',
    idade: 24,
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

function prodigio({ idade, conquistas: { UCL: ucl, Libertadores: liberta } }) {

    if (idade < 25 && (ucl || liberta)) {
        return "Golden Boy ?";
    }
}

// console.log(prodigio(jogador));


// -----------------------------------------------------------------------------------

const jogadores = [
    {
        nome: "Joca",
        posicao: 'ME',
        idade: 21,
        nacionalidade: "Argentina"
    },
    {
        nome: "Rafinha",
        posicao: 'ME',
        idade: 19,
        nacionalidade: "Brasil"
    },
    {
        nome: "Luca",
        posicao: 'MC',
        idade: 23,
        nacionalidade: "Brasil"
    },
    {
        nome: "Henrique",
        posicao: 'ATA',
        idade: 18,
        nacionalidade: "Brasil"
    },
    {
        nome: "Vinicius",
        posicao: 'PE',
        idade: 18,
        nacionalidade: "Brasil"
    },
    {
        nome: "Bruno",
        posicao: 'ZAG',
        idade: 20,
        nacionalidade: "Brasil"
    },

    {
        nome: "Gabinho",
        posicao: 'GOL',
        idade: 20,
        nacionalidade: "Brasil"
    },
]

function posicoesDosJogadores(arr) {
    let meioCampitas = new Map();
    let atacantes = new Map();
    let zagueiros = new Map();
    let goleiros = new Map();
    try {

        for (let i in arr) {
            let j = Number(i);

            let jogadores = arr[j];

            const { nome, posicao } = jogadores;

            let verificaPosicao = posicao.substring(0, 1);

            switch (verificaPosicao) {
                case "M": meioCampitas.set(nome,posicao); break;

                case "A": atacantes.set(nome,posicao); break;

                case "P": atacantes.set(nome,posicao); break;

                case "Z": zagueiros.set(nome,posicao); break;

                case "G": goleiros.set(nome,posicao); break;

                default: throw new Error("Posição indefinida"); break;
            }

        }
    } catch (e) {

        e.name = "Erro de Posição :";

        console.log(e.name, e.message);
    }

    console.log(meioCampitas, atacantes, zagueiros, goleiros);

}

posicoesDosJogadores(jogadores);






