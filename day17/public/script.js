fetch("/config")
  .then((response) => response.json())
  .then((config) => {
    const API_URL = `https://api.themoviedb.org/3/discover/movie?sorty_by=popularity.desc&api_key=${config.apiKey}&page=1`;
    console.log(API_URL);
    // Your code to use API_URL goes here
  })
  .catch((error) => console.error("Error fetching API key:", error));
