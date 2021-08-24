const input = require('prompt-sync')()

//Entrada
var numero1 = Number(input('Digite um numero inteiro: '))
var numero2 = Number(input('Digite um numero inteiro: '))
var numero3 = Number(input('Digite um numero inteiro: '))
var menor = 0

//Processamento
if (numero1 < numero2 & numero1 < numero3){
    menor = numero1
}
else if (numero2 < numero1 & numero2 < numero3){
    menor = numero2
}else{
    menor = numero3
}
//Saida
console.log('o menor numero entre os 3 digitados é', menor)