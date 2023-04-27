import { getNews } from "./model";
import { generateUI } from "./view/cardsView";

export async function updateUI(requestURL) {
  console.log("im in updateUI");
  let articles = await getNews(requestURL);

  generateUI(articles);
}
