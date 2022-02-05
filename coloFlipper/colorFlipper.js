var btn = document.getElementById('btn')
btn.addEventListener('click', addColor )
//btn.addEventListener('click', choosenColor)

function randomNumber(max){
    var result = Math.round(Math.random() * max)
    return result
}

function randomColor(){
    var color = `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
    return color
}

function addColor(){
    var bodyColor = document.querySelector('body')
    bodyColor.style.backgroundColor = randomColor()
    var color = choosenColor()
    return bodyColor, color 
}

function choosenColor(){
    var choosenColor = document.querySelector('.color')
    choosenColor.innerText = randomColor()
    return choosenColor
}
