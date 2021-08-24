const input = require('prompt-sync')()

function main(){
    const segundos = Number(input('Digite um valor em segundos: '))
    console.log(segundos,'segundos =',converte_hora(segundos))
}

function converte_hora(segundos){  
    horas = segundos / 3600
    min = ((segundos / 60) % 60)
    seg = segundos - (horas * 3600) - (min * 60)
    return (`${horas}:${min}:${seg}`)
}

main()