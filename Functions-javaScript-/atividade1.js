const prompt = require ('prompt-sync')()
const conta = require ('./funcaoatividade1')

const alt = Number( prompt('Informe a  sua altura: '))
const peso = Number  ( prompt ('Informe o seu peso: '))

const res = conta(peso,alt)

console.log(`${res} `)