let count = 0
var value = document.querySelector('#value')
var btns = document.querySelectorAll('.btn')
//console.log(btns)
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        var styles = e.currentTarget.classList
        //console.log(styles)
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else{
            count = 0
        }

        if(count > 0){
            value.style.color = "#00ff00"
        }else if(count < 0){
            value.style.color = "#ff0000"
        }else{
            value.style.color = "#000000"
        }
        value.textContent = count
    })
})
