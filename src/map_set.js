let meuMap = new Map();

meuMap.set("Nome", "gian");
meuMap.set ("Stack", "HTML, CSS, JS");

console.log(meuMap);

const nome = meuMap.get("Nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("Nome"))


console.log(meuMap.size);

for (let chave of meuMap.keys()){
    console.log(chave)
}

for (let valor of meuMap.values()){
    console.log(valor)
}

for (let entrada of meuMap.entries()){
    console.log(entrada)
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("Stack")

console.log(meuMap);

//SET

const cpfs = new Set();

cpfs.add('37209053069');
cpfs.add('84443252010');
cpfs.add('73555717022');

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ["Fred Menge", "Pedro Juca", "Maria Isabel" , "Fred Menge", "Pedro Juca"];

const arrayComoSet = new Set([...array]);

const arraySemDuplicatas = [...arrayComoSet];


console.log(arrayComoSet);
console.log(arraySemDuplicatas);