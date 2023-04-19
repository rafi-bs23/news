import { apiKey, country } from "./config";
import { generateUI } from "./view/cardsView";
import { createOptions } from "./view/optionNavView";

const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");

const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

//Deafult api request for general category
let requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;

//News API Call
export const getNews = async (requestURL) => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};

const init = () => {
  optionsContainer.innerHTML = "";
  getNews(requestURL);
  createOptions(options);
};

init();
