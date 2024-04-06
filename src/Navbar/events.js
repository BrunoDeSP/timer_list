import { controlsNavbar, indicatorNavbar } from "./elements.js"

let lastDivValue = 0
let lastDiv = document.getElementById('one')

export function moveNavbar() {
    controlsNavbar.addEventListener('click', (event) => {
        console.log(event.target)
        const value = Number(event.target.dataset.position)
        console.log(lastDivValue)
        if(lastDivValue == value) {            
            return
        }
        if(lastDiv !== undefined) {
            lastDiv.classList.remove("active")
        }
        lastDivValue = value
        lastDiv = document.getElementById(event.target.id)
        event.target.classList.toggle('active')
        indicatorNavbar.style.transform = `translateX(calc(69px * ${value}))`;
        console.log(`${lastDivValue} , não sou igual`)
    })
    
}