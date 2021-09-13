"use strict";

const showsContainer = document.querySelector(".js-shows");
const favoritesContainer = document.querySelector(".js-favorites");
const input = document.querySelector(".js-search-input");
const button = document.querySelector(".js-button");
let defaultImg = "./assets/images/wc-placeholder.jpg";
let arrayShows = [];
let arrayShowsId = [];
let arrayShowsName = [];
let arrayShowsImg = [];
let favorites = [];

function handleShow(ev) {
  console.log(ev.currentTarget.id);
}
function handleFavorites(ev) {
  const favSelected = parseInt(ev.currentTarget.id);
  const showClicked = arrayShows.find((info) => {
    return info.show.id === favSelected;
  });
  console.log(showClicked);
  const checkSelection = favorites.findIndex((fav) => {
    return fav.show.id === favSelected;
  });
  if (checkSelection === -1) {
    favorites.push(showClicked);
  } else {
    favorites.splice(checkSelection, 1);
  }
  console.log(favorites);

  ev.currentTarget.classList.toggle("favorite-identifier");
  paintFavorites();
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

  function setInLocalStorage() {
    const stringShows = JSON.stringify(palettes);
    localStorage.setItem("shows", stringShows);
  }
  function getFromApi() {
    fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        arrayShows = data;
        console.log(arrayShows);

        paintArrayShows();

        setInLocalStorage();
      });
  }
}

function getLocalStorage() {
  const localStorageShows = localStorage.getItem("shows");
  if (localStorageShows === null) {
    getFromApi();
  } else {
    const arrayShows = JSON.parse(localStorageShows);
    palettes = arrayShows;
    paintPalettes();
  }
}
button.addEventListener("click", handleSearch);
