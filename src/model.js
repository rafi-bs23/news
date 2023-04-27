//News API Call
export const getNews = async (requestURL) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let response = await fetch(requestURL);
  console.log(response);

  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();

  console.log("-> " + data.articles);

  return data.articles;
  // generateUI(data.articles);
};
