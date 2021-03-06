(function(window) {
  "use strict";
  var mainContainer = document.querySelector(".main-wrap"),
    openCtrl = document.getElementById("btn-search"),
    closeCtrl = document.getElementById("btn-search-close"),
    searchContainer = document.querySelector(".search"),
    inputSearch = searchContainer.querySelector(".search__input");

  function init() {
    initEvents();
  }

  function initEvents() {
    openCtrl.addEventListener("click", openSearch);
    closeCtrl.addEventListener("click", closeSearch);
  }

  function openSearch() {
    mainContainer.classList.add("main-wrap--move");
    searchContainer.classList.add("search--open");
    setTimeout(function() {
      inputSearch.focus();
    }, 600);
  }

  function closeSearch() {
    mainContainer.classList.remove("main-wrap--move");
    searchContainer.classList.remove("search--open");
    inputSearch.blur();
    inputSearch.value = "";
  }

  init();

  openSearch();
})(window);
