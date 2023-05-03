

/* code is here */

/*let myFunc = function(){
    console.log('i clicked')
}
let page = document.querySelector('.about-text')
page.addEventListener('click', myFunc)*/


//gallery js

if (document.body.id === 'Homepage') {

const cardContainer = document.getElementById("card-container");
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");
const loader = document.getElementById("loader");

//const cardLimit = 99;
const cardLimit = 18;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

cardTotalElem.innerHTML = cardLimit;

var throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);

  return `hsl(${h}deg, 90%, 85%)`;
};

const createCard = (index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = index;
  card.style.backgroundColor = getRandomColor();
  cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
  currentPage = pageIndex;

  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange =
    currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

  cardCountElem.innerHTML = endRange;

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};

const handleInfiniteScroll = () => {
  throttle(() => {
    console.log('currentPage', currentPage)
    console.log('document.body.offsetHeight', document.body.offsetHeight)
    console.log('window.innerHeight + window.pageYOffset ', window.innerHeight + window.pageYOffset )
    const endOfPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight-300;

    if (endOfPage) {
      addCards(currentPage + 1);
      console.log('its end of page')
      console.log('currentPage',  currentPage )
    }

    if (currentPage === pageCount) {
      console.log('remove scroll')
      removeInfiniteScroll();
     
    }
  }, 300);
};

const removeInfiniteScroll = () => {
  loader.remove();
  window.removeEventListener("scroll", handleInfiniteScroll);
};

window.onload = function () {
  addCards(currentPage);
};

window.addEventListener("scroll", handleInfiniteScroll);
}

