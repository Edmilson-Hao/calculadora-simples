/*var display     = document.querySelector("#display")
var ce          = document.querySelector("#options > div:nth-child(1)")
var percentage  = document.querySelector("#options > div:nth-child(2)")
var squareRoot  = document.querySelector("#options > div:nth-child(3)")
var xSquared    = document.querySelector("#options > div:nth-child(4)")

var seven       = document.querySelector("#numbers > div:nth-child(1)")
var eight       = document.querySelector("#numbers > div:nth-child(2)")
var nine        = document.querySelector("#numbers > div:nth-child(3)")
var four        = document.querySelector("#numbers > div:nth-child(4)")
var five        = document.querySelector("#numbers > div:nth-child(5)")
var six         = document.querySelector("#numbers > div:nth-child(6)")
var one         = document.querySelector("#numbers > div:nth-child(7)")
var two         = document.querySelector("#numbers > div:nth-child(8)")
var three       = document.querySelector("#numbers > div:nth-child(9)")
var zero        = document.querySelector("#numbers > div:nth-child(10)")
var equal       = document.querySelector("#numbers > div:nth-child(11)")

/
*
+
-


var display = document.querySelector("#display")

document.addEventListener('click', e => {
    if(display.innerText == 0 ) display.innerText = e.target.innerText
    else display.innerText += e.target.innerText
})





var display = document.querySelector("#display")

document.addEventListener('click', e => {
    if(e.target.innerText == "=") {
        display.innerText = Math(display.innerText)
        return
    }
    
    if(display.innerText == 0 ) display.innerText = e.target.innerText
    else display.innerText += e.target.innerText
})

eval(display.innerText)
*/