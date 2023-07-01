let startBtn  = document.getElementById("startBtn")
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let newCardBtn = document.getElementById("newCardBtn")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""
// sumEL.textContent ="Sum: "+ sum
// cardEL.textContent ="Card: "+ cards[0] + " " + cards[1]

function getRandomCard(){
    min = Math.ceil(1);
    max = Math.floor(13); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  
}
function startGame(){
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
    let card =getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
}
