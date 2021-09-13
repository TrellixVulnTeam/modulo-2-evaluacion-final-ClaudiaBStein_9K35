'use strict';

const showsContainer = document.querySelector('.js-shows');
const favoritesContainer = document.querySelector('.js-favorites');
const input = document.querySelector('.js-search-input');
const button = document.querySelector('.js-button');
let defaultImg = './assets/images/wc-placeholder.jpg';
let arrayShows = [];
let arrayShowsId = [];
let arrayShowsName = [];
let arrayShowsImg = [];
let favorites = [];


function handleShow(ev){
  console.log(ev.currentTarget.id);
}
function handleFavorites(ev){
  console.log(ev.currentTarget.id);
}

function listenFavorites() {
  ev.preventDefault();
  let listFavorites = document.querySelectorAll('.js-show');
  for (let favoriteSelected of favoritesDisplayed){
    favoriteSelected.addEventListener('click', handleFavorites);
  }
}

// function paintFavorites() {
//   let html = '';
//   for (const favorite of favorites) {
//     if (favorite.show.image === null) {
//       html += `<li class="favorite js-favorite" id = "${favorite.show.id}">`;
//       html += `<h2 class="favorite-name js-favorite-name">${favorite.show.name}</h2>`;
//       html += `<img src="${defaultImg}" alt="">`;
//       html += `</li>`;
          
//     } else {
//       html += `<li class="favorite js-favorite" id = "${favorite.show.id}">;
//       html += `<h2 class="favorite-name js-favorite-name">${favorite.show.name}"</h2>`;
//       html += `<img src="${favorite.show.image.medium}" alt="">`;
//       html += `</li>`;
//     }
//     paintFavorites();
//   }
  
//   favoritesContainer.innerHTML = html;
//   //setLocalStorage();
// }

function paintArrayShows() {
  let html='';
  for (const info of arrayShows){
    arrayShowsId = info.show.id;
    arrayShowsImg = info.show.image.medium;
    arrayShowsName = info.show.name;
    html += `<li class="js-show show" id="${arrayShowsId}">`;
    html += `<h5>${arrayShowsName}</h5>`;
    html += `<img class="show-image js-image" src="${arrayShowsImg}" alt="${arrayShowsName}"/>`;
    html += `</li>`;
    
  }
  showsContainer.innerHTML = html;
}


function handleSearch (ev){

  ev.preventDefault();
  const inputValue = input.value;

  fetch(
    `//api.tvmaze.com/search/shows?q=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      arrayShows = data;
      console.log(arrayShows);
    
      paintArrayShows();
    
    });

}

button.addEventListener ('click' , handleSearch);

// function listenFavoritesResult(){
//   const selectedShow = parseInt(ev.currentTarget.id);
//   const clickedShow = arrayShows.find((data) => {
//     return data.show.id === selectedShow;
// }

// const input = document.querySelector('.js-search-input');
// const menu = document.querySelector('.js-menu-list');
// const show = document.querySelector('.js-show');

// function addApi() {
//   let inputValue = input.value;
//   let api = `//api.tvmaze.com/search/shows?q=${inputValue}`;
//   return api;
// }

// addApi(); 


// function getShow(event) {
//   console.log('hola');
//   ev.preventDefault();
//   let api = addApi();
// console.log(api);
//   fetch(api);
//   then(response => response.json());
//   then( data => {return {
//     id: data.show.id,
//     title: data.show.name,
//     image: data.show.image
//   };
//   });
// }


// document.querySelector('.js-form').addEventListener("submit", getShow)
//# sourceMappingURL=main.js.map
