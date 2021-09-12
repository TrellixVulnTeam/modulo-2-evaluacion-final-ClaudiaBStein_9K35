'use strict';

const showsContainer = document.querySelector('.js-shows');
const input = document.querySelector('js-search-input');
let arrayShows = [];


function paintArrayShows() {
  let html='';
  //info es cada elemento del array
  for (const info of arrayShows);{
    console.log(info);
    html += `<li class="js-show show">`;
    html += `<h5>Título de la serie</h5>`
    html += `</li>`;
  }
  showsContainer.innerHTML = html;
}

fetch(
  `//api.tvmaze.com/search/shows?q=${shows}`
)
.then((response) => response.json())
.then((data) => {
    arrayShows = data;
    paintArrayShows();
    
}); 







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