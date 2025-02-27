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

const idades: number[] = []
idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter((idade) => idade < 18)

console.log(menoresDeIdade)

const pessoaTupla: [string, number] = ["Ana", 18]

//Object Types
type Person = {
    nome: string
    idade: number
    profissao?: string
    altura: number
}

//Interface
// interface Person{
//     nome: string
//     idade: number
//     profissao?: string
//     altura: number
// }

const pessoa1: Person = {
    nome: "Ana",
    idade: 18,
    profissao: "desenvolvedora",
    altura: 1.55
}

const pessoa2: Person = {
    nome: "Bianca",
    idade: 19,
    altura: 1.57
}


console.log(pessoa1, pessoa2)

//type aliasas
type Criterio = "greater" | "lower"

function chooseNumber(numero1: number, numero2: number, criterio?: Criterio): number{
    switch(criterio){
        case "greater":
            return numero1 > numero2 ? numero1 : numero2 
        case "lower":
            return numero1 < numero2 ? numero1 : numero2
        default:
            const numeroAleatorio = Math.random() //gera um número pseudo aleatório entre 0 e 1

            if (numeroAleatorio >= 0.5)return numero1
            return numero2
    } 
}

const numeroEscolhido = chooseNumber(10, 20, "lower")

console.log("Número escolhido:", numeroEscolhido)

function somar(num1: number, num2: number): number{
    return num1 + num2
}


// Utility Types: A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes

//1. Partial - Todos os atributos vão se tornar não obrigatórios
type PersonPartial = Partial<Person>

//2. Required - Todos os atributos vão se tornar obrigatórios
type PersonRequired = Required<Person>

//3. Pick - Pegar atributos específicos
type PersonPicked = Pick<Person, "nome" | "idade">

//4. Omit - Esconder atributos específicos
type PersonOmit = Omit<Person, "profissao">

//5. Exclude - Excluir dentro de Union type um tipo da união
type CriterioExclude = Exclude<Criterio, "greater">

//6. Record - Cria um objeto com uma chave que tem um tipo e um valor 
type Pessoas = Record<string, Person>

const pessoas: Pessoas = {
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
}