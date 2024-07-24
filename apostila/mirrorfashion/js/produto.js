var inputtamanho = document.querySelector('[name=tamanho]')
var outputtamanho = document.querySelector('[name=valortamanho]')

function mostratamanho(){
    outputtamanho.value = inputtamanho.value
}
inputtamanho.oninput = mostratamanho