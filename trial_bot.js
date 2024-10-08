// ==UserScript==
// @name         Bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Andrey Kazakov
// @match        https://ya.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eduprof.ru
// @grant        none
// ==/UserScript==

let input = document.getElementsByClassName("search3__input mini-suggest__input")[0];
let links = document.links;
let searchBtn = document.getElementsByClassName("search3__button mini-suggest__button")[0];

if (searchBtn !== undefined) {
  input.value = "купить гитару gibson";
  searchBtn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("gibsonshop.ru") !=-1 ){
      console.log("Найдено " + i + " " + links[i]);
    }
  }
}
