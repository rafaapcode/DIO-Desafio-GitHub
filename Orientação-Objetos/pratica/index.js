class User {
    constructor(email, senha) {
        this._email = email;
        this._senha = senha;
        this.admin = false;
    }

    get email() {
        return this._email;
    }

    mudarSenha(SenhaNova) {
        try {
            if (this.admin) {
                this._senha = SenhaNova;

                return this._senha;
            }else{
                throw new Error("Você não é Administrador !!!");
            }
        } catch (e) {
            return e.message;
        }
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }

    get senha() { return this._senha};

}
