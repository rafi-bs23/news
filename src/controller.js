import { apiKey, country, options, generalURL } from "./config";
import { createOptions, selectCategory } from "./view/optionNavView";
import { searchQuery } from "./view/searchView";
import { updateUI } from "./helpers";

const optionsContainer = document.querySelector(".options-container");

//Deafult api request for general category
// let requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;

const init = () => {
  optionsContainer.innerHTML = "";
  updateUI(generalURL);
  createOptions(options);
  searchQuery();
};

init();
