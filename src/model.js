//News API Call
export const getNews = async (requestURL) => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();

  console.log("-> " + data.articles);
  generateUI(data.articles);
};
