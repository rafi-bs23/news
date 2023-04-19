import { apiKey, country } from "../config";
import { updateUI } from "../helpers";

const optionsContainer = document.querySelector(".options-container");

//Category Selection
const selectCategory = (e, category) => {
  // console.log(e, category);

  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  let requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  e.target.classList.add("active");
  updateUI(requestURL);
};

//Options Buttons
// const createOptions = () => {
//   for (let i of options) {
//     optionsContainer.innerHTML += `<button class="option ${
//       i == "general" ? "active" : ""
//     }" onclick="selectCategory(event,'${i}')">${i}</button>`;
//   }
// };
export const createOptions = (options) => {
  for (let category of options) {
    let button = document.createElement("button");
    button.classList.add("option");
    button.classList.toggle("active", category === "general");
    button.textContent = category;
    button.addEventListener("click", (e) => selectCategory(e, category));
    optionsContainer.appendChild(button);
  }
};
