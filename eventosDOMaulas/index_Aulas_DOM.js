/**Aula 1*/
function mostraAlerta() {
    alert('Tecla foi liberada')
}
/**
 * Aula 2
 */
var inputElement = document.querySelector('input[name=nome]')
var btnElement = document.querySelector('button.botao')

btnElement.onclick = function(){
    var text = inputElement.value
    //alert('Botão clicado')
    alert(text)
}

/**
 * Aula 3
 */

 var linkElement = document.createElement('a')
 linkElement.setAttribute('href','https://google.com')

 var textElement = document.createTextNode('Acessar Google')
 linkElement.appendChild(textElement)

 var containerElement = document.querySelector('#app')
 containerElement.appendChild(linkElement)

 var inputElemento = document.querySelector('#nnome')
 containerElement.removeChild(inputElemento)


 /**
  * Aula 4
  */

  var boxElement = document.querySelector('.caixa')

  boxElement.style.width = '100px'
  boxElement.style.height = '100px'
  boxElement.style.backgroundColor = 'green';