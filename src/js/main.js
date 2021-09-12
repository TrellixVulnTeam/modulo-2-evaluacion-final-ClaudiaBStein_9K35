'use strict';

const showsContainer = document.querySelector('.js-shows');
const input = document.querySelector('.js-search-input');
const button = document.querySelector('.js-button');
let arrayShows = [];
let arrayShowsId = [];
let arrayShowsName = [];
let arrayShowsImg = [];




function paintArrayShows() {
  let html='';
  //info es cada elemento del array de 
  for (const info of arrayShows){
    
    arrayShowsId = info.show.id;
    arrayShowsImg = info.show.image.medium;
    arrayShowsName = info.show.name;
    console.log(info);
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


// document.querySelector('.js-form').addEventListener("submit", getShow);