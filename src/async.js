// function heavyFunction() {
//     let execucoes = 0;
//     for (let i = 0; i < 1000000; i++) {
//         execucoes++;
//     }
//     return execucoes;
// }

const hev = () => {
    let execucoes = 0;
    for (let i = 0; i < 100000; i++) {
        execucoes++
    }
    return execucoes;
}

const heavyFunctionPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 100000; i++) {
            execucoess++
        }
        resolve(execucoes);
    } catch (e) {
        reject("ERRO")
    }
})

const promiseWithParameters = (login, senha) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

// console.log(hev());


async function mainExecution() {
    console.log("Inicio")

    // await heavyFunctionPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseWithParameters('FredMenge@gmail.com', 123456).then(resultado => console.log(resultado))
    try {

        const resultado = await heavyFunctionPromise;
        console.log(resultado);
    } catch (e) {

        console.log(e);
    }
    console.log("Fim");
}

mainExecution();
