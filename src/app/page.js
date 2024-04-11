//page.js
import Image from "next/image";
import CardComponent from "./_components/Card";
import { getAllMovies, getAllMoviesByGenres } from "./service/getMovie";
export default async function Home() {
  const getAllMovie = await getAllMovies();
  function loopGenre() {
    const loop = [];
    getAllMovie.payload.map((e) => {
      if (!loop.includes(e.genre)) {
        loop.push(e.genre);
      }
    });
    return loop;
  }

  // async function get() {
  //   const genre = loopGenre();
  //   for(let i = 0 ; i < genre.length;i++){
  //     // <h1 className="py-6 font-bold text-2xl text-white">{`${genre[i]} Movie &gt;`}</h1>
  //     // let getMovieByGenre = await getAllMoviesByGenres(genre[i]);
  //     // <CardComponent data={getMovieByGenre} />
  //     console.log(genre[i]);
  //   }
  // }
  // const getActionMovie = await getAllMoviesByGenres("action");
  // const getDramaMovie = await getAllMoviesByGenres("drama");
  // const getHollywoodMovie = await getAllMoviesByGenres("Hollywood");
  // const getAnimeMovie = await getAllMoviesByGenres("Anime");
  // const getScifiMovie = await getAllMoviesByGenres("Science%20Fiction");
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-full"
          src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
        />
        <div className="w-full h-full bg-opacity-60 bg-[#38140D] absolute top-0"></div>
      </div>
      <main className="w-[90%] mx-auto">
        <h1 className="py-6 font-bold text-2xl text-white">All Movie &gt;</h1>
        <CardComponent data={getAllMovie} />
        {loopGenre().map(async (e) => {
          const moviesByGenre = await getAllMoviesByGenres(e);
          return (
            <div>
              <h1 className="py-6 font-bold text-2xl text-white">{`${e} Movie >`}</h1>
              <CardComponent data={moviesByGenre} />
            </div>
          );
        })}
        {/* <h1 className="py-6 font-bold text-2xl text-white">
          Action Movie &gt;
        </h1>
        <CardComponent data={getActionMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">Drama Movie &gt;</h1>
        <CardComponent data={getDramaMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">
          Hollywood Movie &gt;
        </h1>
        <CardComponent data={getHollywoodMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">Anime Movie &gt;</h1>
        <CardComponent data={getAnimeMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">
          Science Fiction Movie &gt;
        </h1>
        <CardComponent data={getScifiMovie} /> */}
      </main>
    </>
  );
}
