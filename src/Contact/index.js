let arrowButtonOne = document.getElementById("turn-card-one")
let arrowButtonTwo = document.getElementById("turn-card-two")

export function turnCard() {
    arrowButtonOne.addEventListener('click', () => {
        let card = document.getElementById("contact")
        card.classList.toggle("turn")
    })
    arrowButtonTwo.addEventListener('click', () => {
        let card = document.getElementById("contact")
        card.classList.toggle("turn")
    })
}
