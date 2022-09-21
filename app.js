const container =document.getElementById('container')


const cardArray =[
  {
    name: 'cheeseburger',
    src: 'images/cheeseburger.png'
  },
  {
    name: 'milkshake',
    src: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    src: 'images/pizza.png'
  }, {
    name: 'cheeseburger',
    src: 'images/cheeseburger.png'
  },
  {
    name: 'milkshake',
    src: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    src: 'images/pizza.png'
  }
]

//randomising array
cardArray.sort(() => 0.5 - Math.random())


const cardChosen=[]
const cardsChosenId=[]
const cardsWon=[]
        
function render() {
    for (let i = 0; i < 6; i++) {
    
    const sqr=document.createElement('div')      
    const button=document.createElement('button') //creating cards (button)
    
    
    button.setAttribute('Id',i)  //setting button id as i
    button.addEventListener('click', onClick) 
    button.className='button'


    sqr.appendChild(button)


    //setting images behind buttons    
    const img=document.createElement('img') 
    img.src=cardArray[i].src
    img.style='height:100px;width: 100px;'

    sqr.appendChild(img)
    container.appendChild(sqr) 
  } 
}

render() //calling render 


//onClick function when button is clicked
function onClick() { 
  this.classList.toggle('hide')
      
  const buttonId=this.getAttribute('Id')
  cardChosen.push(cardArray[buttonId].name) //by doing array[buttonId], you're finding specific element that was clicked
  cardsChosenId.push(buttonId)     //1 gets id of button clicked
  console.log(cardsChosenId)
  
  setTimeout(wrongMatch, 500) 
  }



function wrongMatch() {
  const cards = document.querySelectorAll('img')
  const buttons=document.querySelectorAll('button')
  

  const optionOne = cardChosen[0] //2 simplifies id of button clicked
  const optionTwo = cardChosen[1]     //if you want to be able to deal with ids, then you have to define them outside function, since buttonId not in scope, hence cardsChosenIds
  
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  
  if (optionOneId == optionTwoId && cardChosen.length===2) {
    alert('You have clicked the same image!')
    cardsChosenId.length=0
    cardChosen.length=0
    console.log(cardsChosenId)
  }

  else if (optionOne===optionTwo && cardChosen.length===2) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/successPic.jpg') //3 uses simplified variable to edit button clicked
    cards[optionTwoId].setAttribute('src', 'images/successPic.jpg')
    buttons[optionOneId].removeEventListener('click',onClick)
    buttons[optionTwoId].removeEventListener('click',onClick)
    console.log(cardChosen)

    cardChosen.length=0
    cardsChosenId.length=0
    //if match, then the card images are set to a success picture-
    //and ability to click the button is removed
  }
  else if  (optionOne!==optionTwo && cardChosen.length===2) {
    alert('Sorry, try again!')
    buttons[optionOneId].click()
    buttons[optionTwoId].click()
    cardChosen.length=0
    cardsChosenId.length=0
    console.log(cardChosen)
  }


}
