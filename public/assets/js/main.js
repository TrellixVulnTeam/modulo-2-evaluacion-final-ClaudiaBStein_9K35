'use strict';

const input = document.querySelector('.js-search-input');
const menu = document.querySelector('.js-menu-list');

function addApi() {
  let inputValue = input.value;
  let api = `//api.tvmaze.com/search/shows?q=${inputValue}`;
  return api;
}

addApi();
//# sourceMappingURL=main.js.map
