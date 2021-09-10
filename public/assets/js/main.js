'use strict';

const menuButton = document.querySelector('.js-form-button');
const collapsableMenu = document.querySelector('.js-menu-list');
const iconButton = document.querySelector('.js-icon');


function handleClickButton(event){
    ev.preventDefault();
    
let clickedButton = event.CurrentTarget;

    if(clickedButton === iconButton[index]){
        ev.preventDefault();
      collapsableMenu[index].classList.toggle('hidden');
    }
    else {
      collapsableMenu[index].classList.add('hidden');
    
}

menuButton.addEventListener('click', handleClickButton);
'use strict';

const input = document.querySelector('.js-search-input');
const menu = document.querySelector('.js-menu-list');
const show = document.querySelector('.js-show');

function addApi() {
  let inputValue = input.value;
  let api = `//api.tvmaze.com/search/shows?q=${inputValue}`;
  return api;
}

addApi();


function getShow(ev) {
  console.log('hola');
  ev.preventDefault();
  let api = addApi();
  console.log(api);
  fetch(api)
    .then(response => response.json())
    .then( data => {
      console.log(data);



document.querySelector('.js-form').addEventListener("submit", getShow);
//# sourceMappingURL=main.js.map
