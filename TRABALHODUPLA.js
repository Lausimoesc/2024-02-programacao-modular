// TRABALHO EM DUPLA SORTEADA AULA 22/10
// FUNCTION que pegue o char de uma posição do array


//string
var nome = "TADS"      //NAO PODE TER [se nao vira array]
var posicao1 = 1

function umaLetra(nome, posicao1) {
    return nome[posicao1]
}
console.log(umaLetra(nome, posicao1))


//substring (escolhe um indice e da a quantidade de vezes que ele le)
var palavra = "DESENVOLVEDORA"
var posicaoInicial = 5
var posicaoFinal = 10

function subString(palavra, posicaoInicial, posicaoFinal) {
    var trecho = ""
    for (var i = posicaoInicial; i < posicaoFinal; i++) {
        trecho = trecho + palavra[i]
    }
    return trecho
}

console.log(subString(palavra, 5, 10))


// separa frase em array
var frase = "programação modular TADS "
var espaco = " "


function split(frase, separador) {
    var vetor = [];
    var temp = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == separador) {
            vetor.push(subString(frase, temp, i))
            temp = i + 1
        }

    }
    return vetor;
}

console.log(split(frase, espaco)) // ['programação', 'modular', 'TADS']

//nome e sobrenome
nomeSeparado = ["Lauana", "Simoes"]
function join(nome, separador) {
    var nomeCompleto = ""
    for (var i = 0; i < nome.length; i++) {


        if (i == nome.length - 1) {
            nomeCompleto += nome[i]
        }
        else {

            nomeCompleto += nome[i] + separador

        }

    }
    return nomeCompleto;
}

console.log(join(nomeSeparado, espaco))



