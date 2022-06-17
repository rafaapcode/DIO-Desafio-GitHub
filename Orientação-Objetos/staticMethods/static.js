// Sintaxe
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    static som() {
        return "ARRRRRRRRRRR";
    }

    somqoAnimalFaz() {
        let somAnimal2 = this.constructor.som();

        return "O som que o animal faz é " + somAnimal2;
    }

    static dadosAnimalFaz(name, age) {

        return "A " + name.nome + "tem " + age.idade + " anos"; 

    }

    static chamandooSOmdoAnimal(){
        return this.som();
    }

}

const dog = new Animal("Belinha", 4);

Animal.dadosAnimalFaz(dog);

Animal.som();