interface Details {
    andares: number;
    totalAndares: number;
    capacidade: number;
    quantidadePessoas: number;
}

class Elevator implements Details {
    terreo: number;
    andares: number;
    totalAndares: number;
    capacidade: number;
    quantidadePessoas: number;

    constructor(totalAndares: number, capacidade: number) {
        this.terreo = 0
        this.andares = 0;
        this.totalAndares = totalAndares;
        this.capacidade = capacidade;
        this.quantidadePessoas = 0;
    }

    get Getcapacidade(): number {
        return this.capacidade;
    }

    get Gettotalandares(): number {
        return this.totalAndares;
    }

    get Gettotandares(): number {
        return this.andares;
    }

    set Setandares(value: number) {
        this.totalAndares = value;
    }

    set Setcapacidade(value: number) {
        this.capacidade = value;
    }


    inicializar() {
        this.terreo;
        this.capacidade;
        this.quantidadePessoas = 0;
    }

    entrar(person: number) {
        return person < this.capacidade ? this.quantidadePessoas += person : "Limite do Elevador alcançado";
    }

    sair(person: number) {
        return this.quantidadePessoas > 0 ? this.quantidadePessoas -= person : "Não tem ninguém no elevador";
    }

    subir(andar: number) {
        let up = 0;
        if (andar < this.totalAndares && this.andares < this.totalAndares) {
            up = this.andares += andar;
            return up;
        } else {
            this.andares = this.totalAndares;
            up = this.totalAndares;
            return "Você ta no ultimo andar";
        }

    }

    descer(andar: number) {
        let down = 25;
        if (andar > this.terreo && this.andares > this.terreo) {
            down = this.andares -= andar;
            return down;
        } else {
            this.andares = 1;
            down = 1;
            return "Você ta no terreo.";
        }
    }

}

const elevador = new Elevator(25, 10);