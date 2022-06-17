interface Iticket {
    Valoringresso: number;
    adicicional?: number;
}

class Ingresso implements Iticket {

    Valoringresso: number;

    constructor(ticket: number) {
        this.Valoringresso = ticket;
    }

    imprimirValor() {
        return this.Valoringresso;
    }

}

class IngressoVip extends Ingresso implements Iticket {

    Valoringresso: number;

    constructor(ticket: number) {
        super(ticket);
    }


    valorIngressoVip(){
        return this.Valoringresso + 50;
    }


}

const cliente = new Ingresso(20);

const clienteVIp = new IngressoVip(20);

