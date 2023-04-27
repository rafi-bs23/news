import { apiKey } from "../config";
import { updateUI } from "../helpers";
import { newsFromDate } from "../config";

const searchBtn = document.getElementById("search-btn");

function search() {
  const searchQuery = document.getElementById("search-query").value;

  console.log(searchQuery);
  console.log(newsFromDate);

  let searchURL = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${newsFromDate}&sortBy=popularity&apiKey=${apiKey}`;
  updateUI(searchURL);
}

export const searchQuery = function () {
  console.log("im in searchQuery");

  searchBtn.addEventListener("click", search);
};
