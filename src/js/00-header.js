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