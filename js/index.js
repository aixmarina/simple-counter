// select value and buttons 
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

// set initial count 
let count = 0

btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        //console.log(event.currentTarget) we can see which button I click on
        const btn_class = event.currentTarget.classList
        if (btn_class.contains("decrease")) {
            count--
        }
        else if (btn_class.contains("increase")) {
            count++
        }
        else {
            count = 0
        }

        if (count < 0) {
            value.style.color = "red"
        }
        else if (count > 0) {
            value.style.color = "green"
        }
        else {
            value.style.color = "black"
        }
        value.textContent = count

    })
})

