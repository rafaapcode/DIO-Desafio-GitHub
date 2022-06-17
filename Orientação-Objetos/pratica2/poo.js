class Jogador {
    constructor(nome, posicao, dataDeNascimento, nacionalidade, altura, peso) {
        this._nome = nome;
        this._posicao = "Meio Campo";
        this._dataDeNascimento = dataDeNascimento;
        this._nacionalidade = nacionalidade;
        this._altura = altura;
        this._peso = 70;
    }

    get nome() {
        return this._nome;
    }

    get dataDeNascimento() {
        return this._dataDeNascimento;
    }

    get nacionalidade() {
        return this._nacionalidade;
    }

    get altura() {
        return this._altura;
    }

    set peso(value) {
        return this._peso = value;
    }

    set posicao(value) {
        return this._posicao = value;
    }

    jogadorDados() {
        let dados = {
            Nome: this._nome,
            Posicao: this._posicao,
            DataDeNascimento: this._dataDeNascimento,
            Nacionalidade: this._nacionalidade,
            Altura: this._altura,
            Peso: this._peso
        }

        return dados;
    }


    idadeJogador() {
        const dataAtual = new Date().getFullYear();
        const anoNascimento = Number(this._dataDeNascimento.substring(6));

        return dataAtual - anoNascimento;
    }

    aposentadoria() {
        let pos = this._posicao.substring(0, 1);
        const defesa = 40 - this.idadeJogador();
        const meioCampo = 38 - this.idadeJogador();
        const atacante = 35 - this.idadeJogador();


        switch (pos) {
            case "Z": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "z": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "G": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "g": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "L": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "l": return `Faltam ${defesa} anos para o ${this._nome} se aposentar.`; break;

            case "M": return `Faltam ${meioCampo} anos para o ${this._nome} se aposentar.`; break;

            case "m": return `Faltam ${meioCampo} anos para o ${this._nome} se aposentar.`; break;

            case "V": return `Faltam ${meioCampo} anos para o ${this._nome} se aposentar.`; break;

            case "v": return `Faltam ${meioCampo} anos para o ${this._nome} se aposentar.`; break;

            case "A": return `Faltam ${atacante} anos para o ${this._nome} se aposentar.`; break;

            case "a": return `Faltam ${atacante} anos para o ${this._nome} se aposentar.`; break;

            case "P": return `Faltam ${atacante} anos para o ${this._nome} se aposentar.`; break;

            case "p": return `Faltam ${atacante} anos para o ${this._nome} se aposentar.`; break;

            default: return `O ${this._nome} está sem posição.`; break;

        }

    }

}


