var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ingresso = /** @class */ (function () {
    function Ingresso(ticket) {
        this.Valoringresso = ticket;
    }
    Ingresso.prototype.imprimirValor = function () {
        return this.Valoringresso;
    };
    return Ingresso;
}());
var IngressoVip = /** @class */ (function (_super) {
    __extends(IngressoVip, _super);
    function IngressoVip(ticket) {
        return _super.call(this, ticket) || this;
    }
    IngressoVip.prototype.valorIngressoVip = function () {
        return this.Valoringresso + 50;
    };
    return IngressoVip;
}(Ingresso));
var cliente = new Ingresso(20);
var clienteVIp = new IngressoVip(20);
