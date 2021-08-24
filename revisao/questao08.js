const input = require('prompt-sync')()

lista_vetor = []
pares = 0
    
for (let index = 0; index < 20; index++){
    var numero = Number(input("Digite um valor : "))
    lista_vetor.push(numero)
    if (numero % 2 == 0){
        pares += 1
    }
}

    console.log(lista_vetor)
    console.log('Temos',pares,' numeros pares')
