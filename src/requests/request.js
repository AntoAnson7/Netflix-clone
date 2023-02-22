const KEY=process.env.REACT_APP_TMDB_API_KEY

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
    fetchDocumantaries: `/discover/movie?api_key=${KEY}&with_genres=99`
  }

