document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "/api/movies";
  const SEARCH_API = "/api/search?q=";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      showMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const showMovies = (movies) => {
    const main = document.getElementById("main");
    main.innerHTML = "";

    movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
        <img src="${IMAGE_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
      `;

      main.appendChild(movieEl);
    });
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) return "green";
    if (vote >= 5) return "orange";
    return "red";
  };

  const form = document.getElementById("form");
  const search = document.getElementById("search");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim();

    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);
      search.value = "";
    } else {
      window.location.reload();
    }
  });

  getMovies(API_URL);
});
