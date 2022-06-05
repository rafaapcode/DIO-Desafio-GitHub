const alumn1 = {
    nome: "Rafael",
    serie: "3B",
    notas: [10, 5, 6, 7.8, 7],
    media: function () {
        let notasCalc = this.notas;
        let mediaCalc = notasCalc.reduce((acc, val) => acc + val) / notasCalc.length;

        return Math.floor(mediaCalc);
    }
}

const alumn2 = {
    nome: "Jão",
    serie: "3B",
    notas: [9, 5, 7, 8, 7],
    media: function () {
        let notasCalc = this.notas;
        let mediaCalc = notasCalc.reduce((acc, val) => acc + val) / notasCalc.length;

        return Math.floor(mediaCalc);
    }
}

const alumn3 = {
    nome: "Gabriel",
    serie: "3B",
    notas: [7, 6, 6, 8, 7],
    media: function () {
        let notasCalc = this.notas;
        let mediaCalc = notasCalc.reduce((acc, val) => acc + val) / notasCalc.length;

        return Math.floor(mediaCalc);
    }
}

function passouOunao(notaCorte) {
    let alunosPassou = new Map();
    let reprovados = [];

    if (this.media() >= notaCorte) {
        alunosPassou.set(this.nome, "APROVADO");
        return alunosPassou;
    }

    reprovados.push(this.nome);
    return reprovados;
}

let notaCorte = 7;
let result = passouOunao.bind(alumn3, notaCorte);

console.log(passouOunao.call(alumn1, notaCorte));
console.log(passouOunao.apply(alumn2, [notaCorte]));
console.log(result());



