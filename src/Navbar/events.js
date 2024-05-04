import { controlsNavbar, indicatorNavbar } from "./elements.js"

let lastDivValue = 0
let lastDiv = document.getElementById('one')

export function moveNavbar() {
    controlsNavbar.addEventListener('click', (event) => {
        console.log(event.target)
        const value = Number(event.target.dataset.position)
        if(lastDivValue == value) {            
            return
        }
        if(lastDiv !== undefined) {
            lastDiv.classList.remove("active")
        }
        lastDivValue = value
        lastDiv = document.getElementById(event.target.id)
        event.target.classList.toggle('active')
        indicatorNavbar.style.transform = `translateX(calc(69px * ${value}))`
        moveContent(value)
    })
    
}

function moveContent(value) {
    let timer = document.getElementById("timer")
    let list = document.getElementById("todolist")
    let contact = document.getElementById("contact")
    switch (value) {
        case 0 :             
            timer.classList.remove('inactive')
            list.classList.add('inactive')
            contact.classList.add('inactive')
            break;
        case 1 : 
            timer.classList.add('inactive')
            list.classList.remove('inactive')
            contact.classList.add('inactive')
            break;
        case 2 : 
            timer.classList.add('inactive')
            list.classList.add('inactive')
            contact.classList.remove('inactive')
            break;
    }
}