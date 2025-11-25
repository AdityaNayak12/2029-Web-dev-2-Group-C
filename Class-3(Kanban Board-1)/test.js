let movies = [
  {
    name: 'Inception',
    releaseDate: "2010-07-16",
    ratings: 8.8,
  },
  {
    name: "The Dark Knight",
    releaseDate: "2008-07-18",
    ratings: 9.0,
  },
  {
    name: "Interstellar",
    releaseDate: "2014-11-07",
    ratings: 8.6,
  },
  {
    name: "Avatar",
    releaseDate: "2009-12-18",
    ratings: 7.8,
  },
];

// let moviesJson = JSON.stringify(movies);
// console.log(moviesJson)


localStorage.setItem('myMovies' , JSON.stringify(movies))