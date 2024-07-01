function somar ( ){
    let soma = 0;

    for ( let i = 0; i < arguments.length; i++){

        soma +=  arguments[i]
    }
    return soma;
}

console.log(somar(10, 20, 30, 40));

function somarComRest (...numeros) {

    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

//SPREAD

const numeros = [1, 2, 3 ,4]

console.log(...numeros);

const timesRio = [ 'vasco' , 'fluminense', 'flamengo'];
const timesSP = ["São Paulo", "Palmeiras", "Corinthians"];

const timesFutebol = [...timesRio, ...timesSP];

console.log(timesFutebol)

const carroDaJulia = {

    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {

    ...carroDaJulia,
    motor:1.8
}

//desestruturação

const {motor: motorCarroDaAna} = carroDaAna;
const {motor: motorCarroDaJulia} = carroDaJulia;

console.log(motorCarroDaAna);
console.log(motorCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);