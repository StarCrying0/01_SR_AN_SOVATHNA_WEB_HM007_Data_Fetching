import Image from "next/image";
import CardComponent from "./_components/Card";
import { getAllMovies, getAllMoviesByGenres } from "./service/getMovie";
export default async function Home() {
  const getAllMovie = await getAllMovies();
  const getActionMovie = await getAllMoviesByGenres("action");
  const getDramaMovie = await getAllMoviesByGenres("drama");
  const getHollywoodMovie = await getAllMoviesByGenres("Hollywood");
  const getAnimeMovie = await getAllMoviesByGenres("Anime");
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
        <h1 className="py-6 font-bold text-2xl text-white">Action Movie &gt;</h1>
        <CardComponent data={getActionMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">Drama Movie &gt;</h1>
        <CardComponent data={getDramaMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">Hollywood Movie &gt;</h1>
        <CardComponent data={getHollywoodMovie} />
        <h1 className="py-6 font-bold text-2xl text-white">Anime Movie &gt;</h1>
        <CardComponent data={getAnimeMovie} />
      </main>
    </>
  );
}
