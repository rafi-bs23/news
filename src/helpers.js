import { getNews } from "./model";
import { generateUI } from "./view/cardsView";

export async function updateUI(requestURL) {
  let articles = await getNews(requestURL);
  generateUI(articles);
}
