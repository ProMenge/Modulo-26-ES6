const redesSociais = ["Facebook", "Instagram", "Twitter"];

for (let i = 0; i < redesSociais.length; i++) {

    console.log(`Eu tenho um perfil na na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfinal na rede social: ${nomeDaRedeSocial} `)
});

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function (itemAtual) {

    return {
        nome: itemAtual,
        curso: 'FrontEnd'
    }
})

console.log(alunos2);

// const numeros = [1, 2, 3, 4, 5];

// const dobroDosNumeros = numeros.map(function (numeroAtual) {

//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros);

const paula = alunos2.find(function (item) {
    return item.nome == 'Paula'
})
const paulaIndex = alunos2.findIndex(function (item) {
    return item.nome == 'Paula'
})

console.log(paula);
console.log(paulaIndex);

alunos2.push({
    nome: 'Lucio',
    curso: 'BackEnd'
});

const todosAlunosSaoFrontEnd = alunos2.every(function (item) {

    return item.curso === "FrontEnd"
});

console.log(todosAlunosSaoFrontEnd);

const existeAlgumAlunoDeBackEnd = alunos2.some(function (item) {
    return item.curso === 'BackEnd';
})

console.log(existeAlgumAlunoDeBackEnd);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'BackEnd'
}

const alunosDeBackend = alunos2.filter(function (item) {
    return item.curso === 'BackEnd';
})

const alunosDeBackend2 = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);
console.log(alunosDeBackend2);

const nums = [10, 20, 30, 10];
const soma = nums.reduce(function (acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

const nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `
    return acumulador;
}, '');

console.log(nomeDosAlunos)