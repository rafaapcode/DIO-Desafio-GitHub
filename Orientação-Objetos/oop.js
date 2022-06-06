class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        return this._saldo = valor;
    }

    sacar(valorSaque) {

        if (this._saldo < valorSaque) {
            return "Saldo insuficiente";
        }

        this._saldo = this._saldo - valorSaque;

        return this._saldo;
    }

    depositar(valorDeposito) {
        this._saldo = this._saldo + valorDeposito;

        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(cartaoCredito, agencia, numero) {
        // Estamos mandando tudo que recebemos para a classe pai, para que ela faça as operações que tem que serem feitas.

        super(cartaoCredito, agencia, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {

    constructor(agencia, numero) {
        // Estamos mandando tudo que recebemos para a classe pai, para que ela faça as operações que tem que serem feitas.

        super(agencia, numero);
        this.tipo = "poupança";
    }

}

class ContaUniversitaria extends ContaBancaria {

    constructor(agencia, numero) {
        // Estamos mandando tudo que recebemos para a classe pai, para que ela faça as operações que tem que serem feitas.

        super(agencia, numero);
        this.tipo = "Universitaria";
    }


    sacar(saque) {
        if (saque <= 500 && this._saldo >= saque) {
            this._saldo = this._saldo - saque;

            return this._saldo;
        }

        return "Operação inválida";
    }

}