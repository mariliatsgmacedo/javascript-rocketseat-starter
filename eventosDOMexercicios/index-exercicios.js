var botao = document.querySelector('#botao')

function addBox() {
    //Create Element
    var boxDiv = document.createElement('div')
    boxDiv.setAttribute('id', 'boxRed')
    //Create Properties
    boxDiv.style.width = '100px'
    boxDiv.style.height = '100px'
    boxDiv.style.backgroundColor = '#f00'
    boxDiv.style.margin = '10px'
    boxDiv.style.display = 'inline-block'
    
    //Add Body
    document.body.appendChild(boxDiv)
}

botao.addEventListener('click', addBox)


