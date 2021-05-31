const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie/week?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie/week?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie/week?api_key=${API_KEY}&language=en-US`,
  },
};
