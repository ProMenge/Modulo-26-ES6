// Arrow function sem parâmetros
const sayHello = () => {
    console.log("Hello!");
};
// Arrow function com um parâmetro
const greet = name => {
    console.log(`Hello, ${name}!`);
};

// Arrow function com múltiplos parâmetros e retorno explícito
const add = (a, b) => {
    return a + b;
};

// Arrow function com retorno implícito
const multiply = (a, b) => a * b;

// Usando arrow function para preservar o `this` léxico
function Person(name) {
    this.name = name;
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old`);
    }, 1000);
}

const john = new Person("John");

// Chamando as arrow functions
sayHello(); // "Hello!"
greet("Alice"); // "Hello, Alice!"
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// O objeto john terá sua idade incrementada a cada segundo, e o `this` se referirá corretamente ao objeto Person