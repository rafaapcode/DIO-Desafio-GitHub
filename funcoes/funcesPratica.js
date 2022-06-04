const alunos = [
    {
        nome: 'João',
        nota: [8, 7, 8, 7, 6, 9],
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: [5, 8, 8, 6.7, 6.5, 9],
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: [6, 7, 6, 8.3, 3, 10],
        turma: '1B',
    },
    {
        nome: 'João',
        nota: [5, 4, 8, 1, 7, 9],
        turma: '2C',
    },
    {
        nome: 'Vitinho',
        nota: [4, 8, 8, 7.5, 6, 7],
        turma: '3C',
    },
    {
        nome: 'Carlos',
        nota: [4, 6, 4, 7, 6, 9],
        turma: '3C',
    },
];



function alunmMedia(aluno, mediaFinal) {
    let aprovados = [];

    for (let i = 0; i < aluno.length; i++) {

        // Destructuring nos OBJ dentro de um ARRAY;
        const { nota, nome } = aluno[i];

        let sumNotas = nota.reduce((acc, value) => {
            return acc + value;
        });

        let mediaAlunos = Math.floor(sumNotas / nota.length);

        if (mediaAlunos >= mediaFinal) {
            aprovados.push(nome);
        }
    }

    return aprovados;

}

console.log(
    alunmMedia(alunos, 7));