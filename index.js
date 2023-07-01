let startBtn  = document.getElementById("startBtn")
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let newCardBtn = document.getElementById("newCardBtn")
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
sumEL.textContent += sum
cardEL.textContent += firstCard+" "+secondCard
startBtn.onclick=()=>{
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent=message
}

newCardBtn.onclick=()=>{
    console.log("misk")
}