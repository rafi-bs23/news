//Enter your API key here
// export let apiKey = "503c6936590040aab699abe3176784a3";
export let apiKey = "8a51a7ddadd54917b43c8105c69b8713";

export let newsFromDate = new Date();
newsFromDate.setMonth(newsFromDate.getMonth() - 1);

// country we want to news about
export const country = "us";
export const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];
export let generalURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
// export let searchURL = `https://newsapi.org/v2/everything?q=Apple&from=2023-04-27&sortBy=popularity&apiKey=${apiKey}`;
