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