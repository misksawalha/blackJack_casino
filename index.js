let startBtn  = document.getElementById("startBtn")
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let newCardBtn = document.getElementById("newCardBtn")
let playerEL = document.getElementById("player-el")


let player={
    name:"Misk",
    chips:170
}
playerEL.textContent = player.name + ": $"+player.chips
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// sumEL.textContent ="Sum: "+ sum
// cardEL.textContent ="Card: "+ cards[0] + " " + cards[1]

function getRandomCard(){
    // min = Math.ceil(1);
    // max = Math.floor(13); 
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
  
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = cards[0]+cards[1]
    renderGame()
}
function renderGame(){
    cardEL.textContent ="Card: " 
    for(let i=0;i<cards.length;i++){
        cardEL.textContent +=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent ="Sum: "+ sum
    

}

function newCard(){
    if (isAlive  && hasBlackJack === false) {
        let card =getRandomCard()
        sum+=card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}
