const URL = "https://dog.ceo/api/breeds/image/random";

const main_cards = document.querySelector('#main-cards');
const template_cards = document.querySelector('#tpt-cards').content;
const fragment = document.createDocumentFragment();

const options = document.querySelector('.buttons');

const btn1 = document.querySelector('#btn1');
const btn3 = document.querySelector('#btn3');
const btn9 = document.querySelector('#btn9');
const btn12 = document.querySelector('#btn12');

btn1.addEventListener('click', GetOneCard);
btn3.addEventListener('click', GetThreeCard);
btn9.addEventListener('click', GetNineCard);
btn12.addEventListener('click', GetTwelveCard);

const input_cards = document.querySelector('#txt-cards');

input_cards.addEventListener('keyup', RandomCards);

function RandomCards (event) {
  const selectCards = parseInt(input_cards.value);
  console.log(selectCards);
  if (event.keyCode === 13) {
    console.log('Entra');
    for (let i = 0; i < selectCards; i++) {
      GetCard();    
    }
  }
}

function GetOneCard(event) {
  main_cards.innerHTML = '';
  event.preventDefault();  
    GetCard();
}

function GetThreeCard(event) {
  main_cards.innerHTML = '';
  event.preventDefault(); 
  for (let i= 0; i < 3; i++) {
    GetCard();    
  }  
}

function GetNineCard(event) {
  main_cards.innerHTML = '';
  event.preventDefault(); 
  for (let i= 0; i < 9; i++) {
    GetCard();    
  }  
}

function GetTwelveCard(event) {
  main_cards.innerHTML = '';
  event.preventDefault();
  for (let i= 0; i < 12; i++) {
    GetCard();    
  }  
}

function GetCard() {
  fetch(URL)
  .then(response => response.json())
  .then(data => {    
    const clone_tpt = template_cards.cloneNode(true);
    clone_tpt.querySelector('img').src = data.message;
    fragment.appendChild(clone_tpt);            
    main_cards.appendChild(fragment);
  })
}