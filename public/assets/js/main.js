"use strict";

const showsContainer = document.querySelector(".js-shows");
const favoritesContainer = document.querySelector(".js-favorites");
const input = document.querySelector(".js-search-input");

const button = document.querySelector(".js-button");
const logButton = document.querySelector(".js-log-button");
let defaultImg = "./assets/images/wc-placeholder.jpg";
let arrayShows = [];
let arrayShowsId = [];
let arrayShowsName = [];
let arrayShowsImg = [];
let favorites = [];

function handleFavorites(ev) {
  const favSelected = parseInt(ev.currentTarget.id);
  const showClicked = arrayShows.find((info) => {
    return info.show.id === favSelected;
  });
  const checkSelection = favorites.findIndex((fav) => {
    return fav.show.id === favSelected;
  });
  if (checkSelection === -1) {
    favorites.push(showClicked);
  } else {
    favorites.splice(checkSelection, 1);
  }

  ev.currentTarget.classList.toggle("favorite-identifier");
  paintFavorites();
  setInLocalStorage();
}

function listenFavorites() {
  let listFavorites = document.querySelectorAll(".js-show");
  for (let favoriteSelected of listFavorites) {
    favoriteSelected.addEventListener("click", handleFavorites);
  }
}

// function foundFavorite(show) {
//   const favoriteFound = favorites.find((fav) => {
//     return fav.id === show.id;
//   });
//   if (favoriteFound === undefined) {
//     return false;
//   } else {
//     return true;
//   }
// }

function paintFavorites() {
  let html = "";
  for (const favorite of favorites) {
    if (favorite.show.image === null) {
      html += `<li class="favorite js-favorite" id = "${favorite.show.id}">`;
      html += `<h4 class="favorite-name js-favorite-name">${favorite.show.name}</h4>`;
      html += `<img src="${defaultImg}" alt="">`;
      html += `</li>`;
    } else {
      html += `<li class="favorite js-favorite" id = "${favorite.show.id}">`;
      html += `<h2 class="favorite-name js-favorite-name">${favorite.show.name}"</h2>`;
      html += `<img src="${favorite.show.image.medium}" alt="">`;
      html += `</li>`;
    }
  }

  favoritesContainer.innerHTML = html;
  //setLocalStorage();
}

function handleLogButton() {
  for (const favorite of favorites) {
    console.log(favorite.show.name);
  }
}
logButton.addEventListener("click", handleLogButton);

function paintArrayShows() {
  let html = "";
  for (const info of arrayShows) {
    arrayShowsId = info.show.id;
    arrayShowsImg = info.show.image.medium;
    arrayShowsName = info.show.name;
    html += `<li class="js-show show" id="${arrayShowsId}">`;
    html += `<h5>${arrayShowsName}</h5>`;
    html += `<img class="show-image js-image" src="${arrayShowsImg}" alt="${arrayShowsName}"/>`;
    html += `</li>`;
  }
  showsContainer.innerHTML = html;

  listenFavorites();
}

function handleSearch(ev) {
  ev.preventDefault();
  const inputValue = input.value;
  getFromApi(inputValue);
}

function setInLocalStorage() {
  const stringShows = JSON.stringify(favorites);
  localStorage.setItem("favorites", stringShows);
}

function getFromApi(inputValue) {
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      arrayShows = data;

      paintArrayShows();

      setInLocalStorage();
    });
}

function getLocalStorage() {
  const localStorageShows = localStorage.getItem("favorites");
  if (localStorageShows !== null) {
    const arrayShows = JSON.parse(localStorageShows);
    favorites = arrayShows;
    paintFavorites();
  }
}
button.addEventListener("click", handleSearch);
getLocalStorage();

//# sourceMappingURL=main.js.map
