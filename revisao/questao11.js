const input = require('prompt-sync')()

var porcentagem = 0

function main(){
    var p = Number(input('Digite uma porcentagem [p]: '))
    var x = Number(input('Digite um valor para calcular a porcentagem [x]: '))
    calculo_porcentagem(p,x)
}

function calculo_porcentagem(p, x){
        porcentagem = ((p * x )/100)
        console.log(p,'% de',x ,'=',porcentagem)        
}

main()