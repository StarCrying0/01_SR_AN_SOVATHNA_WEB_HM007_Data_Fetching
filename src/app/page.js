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
      </main>
    </>
  );
}
