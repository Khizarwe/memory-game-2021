const cardArray = [
    {
        name:'burger',
        image:'src/images/burger.jpg'
    },
    {
        name:'hotdog',
        image:'src/images/hotdog.jpg'
    },
    {
        name:'Islamabad',
        image:'src/images/Islamabad.jpg'
    },
    {
        name:'Milk shake',
        image:'src/images/milk shake.jpg'
    },
    {
        name:'pizza',
        image:'src/images/pizza.jpg'
    },
    {
        name:'tree',
        image:'src/images/tree.jpg'
    },
    {
        name:'burger',
        image:'src/images/burger.jpg'
    },
    {
        name:'hotdog',
        image:'src/images/hotdog.jpg'
    },
    {
        name:'Islamabad',
        image:'src/images/Islamabad.jpg'
    },
    {
        name:'Milk shake',
        image:'src/images/milk shake.jpg'
    },
    {
        name:'pizza',
        image:'src/images/pizza.jpg'
    },
    {
        name:'tree',
        image:'src/images/tree.jpg'
    }
]
let result = cardArray.sort(()=>0.5 - Math.random())
console.log(cardArray)
let name = prompt("Enter you name😊:")
const grid = document.querySelector('.grid')
const finalResult = document.querySelector('#result')
let choosenCard = []
let choosenCardId = []
let cardsWon = []

function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
    const cards = document.createElement('img')
    cards.setAttribute('src','src/images/shinny.jpg')
    cards.setAttribute('data-id',i)
    cards.addEventListener('click',flipCard)
    grid.append(cards)
    }
}
createBoard()

function flipCard(){
    let cardId = this.getAttribute('data-id')
    choosenCard.push(cardArray[cardId].name)
choosenCardId.push(cardId)
this.setAttribute('src',cardArray[cardId].image)
if(choosenCard.length === 2){
    setTimeout(checkForMatch, 500)
}
console.log(choosenCardId)
}
function checkForMatch(){
    const choosenImage = document.querySelectorAll('img')
    let optionOneId = choosenCardId[0]
    let optiontwoId = choosenCardId[1]
    if(optionOneId == optiontwoId){
        alert(" You click the same image 😒! "+ name)
        choosenImage[optionOneId].setAttribute('src','src/images/shinny.jpg')
        choosenImage[optiontwoId].setAttribute('src','src/images/shinny.jpg')
        
    }
    else if(choosenCard[0]=== choosenCard[1]){
        alert(`wow 😲 ${name} you have found the match ` )
        choosenImage[optionOneId].setAttribute('src','src/images/white.png')
        choosenImage[optiontwoId].setAttribute('src','src/images/white.png')
        choosenImage[optionOneId].removeEventListener('click',flipCard)
        choosenImage[optiontwoId].removeEventListener('click',flipCard)
        cardsWon.push(choosenCard)
        
    }
    else{
        alert(`Sorry!😔 ${name} try again!`)
        choosenImage[optionOneId].setAttribute('src','src/images/shinny.jpg')
        choosenImage[optiontwoId].setAttribute('src','src/images/shinny.jpg')
    }
    choosenCard= []
choosenCardId = []

    finalResult.textContent =  cardsWon.length
    if(cardsWon.length == cardArray.length/2 ){
    finalResult.textContent = `congratulation🎉! ${name} you have won`
    }
}
