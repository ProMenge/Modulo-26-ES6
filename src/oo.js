class Pokemon {
    // nome = '';
    // tipo = '';
    #hp = 100;
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    atacar = (attackName) => {
        console.log(`${this.nome} atacou com ${attackName}`);
    }

    getDamage() {
        console.log("Pikachu received an attack")
        this.#hp -= 10
    }

    showHp() {
        console.log(`Now Pikachu has: ${this.#hp}HP`);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', "Elétrico")
    }

    atacar = () => {
        console.log(`${this.nome} atacks with Thundershock!!!`);
    }


}

const pikachuDoAsh = new Pikachu();
// const pikachu = new Pokemon("Pikachu", 'Elétrico');
// pikachu.atacar("Choque do Trovão")
// console.log(pikachu);

console.log(pikachuDoAsh);
pikachuDoAsh.getDamage();
pikachuDoAsh.atacar();
pikachuDoAsh.showHp();

// console.log(pikachuDoAsh instanceof Pikachu); TRUE
// console.log(pikachuDoAsh instanceof Pokemon); TRUE