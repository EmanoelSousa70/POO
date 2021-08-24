const input = require('prompt-sync')()

listas_num = []
soma = 0

while(true){
    var numero = Number(input('digite um numero inteiro (para encerrar digite(-1): '))
    if (numero == -1){
        break
    }
    else{
        listas_num.push(numero)
        soma = soma + numero
    }
    }
    var media_aritimetica = (soma / listas_num.length)
    console.log('A soma dos numeros é igual a',soma,'e a media aritimetica é',media_aritimetica)


