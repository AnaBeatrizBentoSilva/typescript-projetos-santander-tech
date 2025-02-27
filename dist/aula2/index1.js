"use strict";
// let numero = 20 //Inferência de tipo
// const pi = 3.1415
// let nome: string = "Ana"
// let correta: boolean = true
// let resultado = numero * pi
// const nomeDeUsuario = prompt("Qual é o seu nome?")
// console.log(nomeDeUsuario?.toUpperCase())
// const numeros: number[] = [1, 2, 3, 4, 5]
// const valores: Array<number> = [101, 102, 103, 104, 105]
// ! const misto: (number | string)[] = ["Ana", 18, 1.55] -> evite
// ! const misto: any[] = ["Ana", 18, 1.55, {}, () => {}, true] -> evite usar any
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ["Ana", 18];
//Interface
// interface Person{
//     nome: string
//     idade: number
//     profissao?: string
//     altura: number
// }
const pessoa1 = {
    nome: "Ana",
    idade: 18,
    profissao: "desenvolvedora",
    altura: 1.55
};
const pessoa2 = {
    nome: "Bianca",
    idade: 19,
    altura: 1.57
};
console.log(pessoa1, pessoa2);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random(); //gera um número pseudo aleatório entre 0 e 1
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "lower");
console.log("Número escolhido:", numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const pessoas = {
    "123.456.789-00": {
        nome: "Fulano",
        idade: 21,
        altura: 1.80
    },
    "156.456.789-00": {
        nome: "Fulana",
        idade: 25,
        altura: 1.72
    }
};
