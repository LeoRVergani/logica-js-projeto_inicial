alert("Boas vindas ao nosso site!");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos.";

nome = prompt("Qual seu nome?");
idade = prompt("Qual a sua idade?");

if (nome  && idade === undefined) {
    alert(mensagemDeErro);    
} else if (idade >= 18) {
        alert("Olá, " + nome + " você pode tirar habilitação.");
    } else {
        alert("Olá, " + nome + " você NÃO pode tirar habilitação.");
    }


