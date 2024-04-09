export const getAllMovies = async () => {
  const movies = await fetch("https://movie-api-get-only-bmc3.vercel.app/api",{ cache: "no-store" });
  const data = await movies.json();
  return data;
};

export const getMovieById = async (id) => {
  const movie = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
  const data = await movie.json();
  return data;
};

export const getAllMoviesByGenres = async (genre) => {
  const movies = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`
  );
  const data = await movies.json();
  return data;
};
