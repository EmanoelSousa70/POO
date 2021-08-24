const input = require('prompt-sync')()

//Entrada
var numero = Number(input('Digite um numero inteiro: '))
//Processamento

//Saida
console.log(numero,'tem como seu antecessor o numero',(numero - 1),'e como seu sucessor o numero',(numero + 1))
