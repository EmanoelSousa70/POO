const input = require('prompt-sync')()

lista_vetor = []
    for (let index=0; index < 5; index++){
        var numero = input("Digite um valor : ")
        lista_vetor.push(numero)
    }

    console.log(lista_vetor)

