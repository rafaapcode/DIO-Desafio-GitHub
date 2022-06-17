var Elevator = /** @class */ (function () {
    function Elevator(totalAndares, capacidade) {
        this.terreo = 0;
        this.andares = 0;
        this.totalAndares = totalAndares;
        this.capacidade = capacidade;
        this.quantidadePessoas = 0;
    }
    Object.defineProperty(Elevator.prototype, "Getcapacidade", {
        get: function () {
            return this.capacidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "Gettotalandares", {
        get: function () {
            return this.totalAndares;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "Gettotandares", {
        get: function () {
            return this.andares;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "Setandares", {
        set: function (value) {
            this.totalAndares = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "Setcapacidade", {
        set: function (value) {
            this.capacidade = value;
        },
        enumerable: false,
        configurable: true
    });
    Elevator.prototype.inicializar = function () {
        this.terreo;
        this.capacidade;
        this.quantidadePessoas = 0;
    };
    Elevator.prototype.entrar = function (person) {
        return person < this.capacidade ? this.quantidadePessoas += person : "Limite do Elevador alcançado";
    };
    Elevator.prototype.sair = function (person) {
        return this.quantidadePessoas > 0 ? this.quantidadePessoas -= person : "Não tem ninguém no elevador";
    };
    Elevator.prototype.subir = function (andar) {
        var up = 0;
        if (andar < this.totalAndares && this.andares < this.totalAndares) {
            up = this.andares += andar;
            return up;
        }
        else {
            this.andares = 25;
            up = 25;
            return "Você ta no ultimo andar";
        }
    };
    Elevator.prototype.descer = function (andar) {
        var down = 25;
        if (andar > this.terreo && this.andares > this.terreo) {
            down = this.andares -= andar;
            return down;
        }
        else {
            this.andares = 1;
            down = 1;
            return "Você ta no terreo.";
        }
    };
    return Elevator;
}());
var elevador = new Elevator(25, 10);
