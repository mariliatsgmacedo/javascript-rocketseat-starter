var botao = document.querySelector('#botao')

function addBox() {
    //Create Element
    var boxDiv = document.createElement('div')
    boxDiv.setAttribute('id', 'boxRed')
    boxDiv.setAttribute('onmouseenter', 'changeColorBack(this)')
    //Create Properties
    boxDiv.style.width = '100px'
    boxDiv.style.height = '100px'
    boxDiv.style.backgroundColor = '#f00'
    boxDiv.style.margin = '10px'
    boxDiv.style.display = 'inline-block'
    //Add Body
    document.body.appendChild(boxDiv)

}

function changeColorBack(boxDiv) {
    boxDiv.style.backgroundColor = getRandomColor()
}

function getRandomColor() {

    var letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}
var newColor = getRandomColor()

botao.addEventListener('click', addBox)


