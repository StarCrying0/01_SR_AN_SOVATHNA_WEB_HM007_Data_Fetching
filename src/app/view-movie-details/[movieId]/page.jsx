import { getMovieById } from "@/app/service/getMovie";

const MovieDetails = async ({ params }) => {
  const data = await getMovieById(params.movieId);

  const star = Math.round(data.payload.rating);
  function rating(stars) {
    const starArray = [];
    for (let i = 1; i <= stars; i += 2) {
      starArray.push(<i className="bx bxs-star text-[#EE9F2F]"></i>);
    }
    if (starArray.length <= 5) {
      for (let i = starArray.length; i < 5; i++) {
        starArray.push(<i className="bx bxs-star"></i>);
      }
    }
    return starArray;
  }
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(data.payload.posted_at);
  const format = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}, ${date.getHours()}:${
    date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes()
  }:${date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds()} ${
    date.getHours() < 12 ? "AM" : "PM"
  }`;
  return (
    <>
      <div
        className="text-white w-[85%] pt-40 mx-auto flex gap-8"
        key={data.payload.movie_id}
      >
        <img className="w-[70%] rounded-md" src={data.payload.image} alt="" />
        <div className="text-sm">
          <div>
            <p className="font-bold text-xl">{data.payload.director}</p>
            <p>{`${data.payload.runtime} minutes`}</p>
            <p>{data.payload.genre}</p>
            {rating(star)}
          </div>
          <div className="mt-14">
            <p className="font-bold text-xl">{`${data.payload.movie_title} (${data.payload.released_year})`}</p>
            <p>{data.payload.description}</p>
          </div>
          <div className="flex mt-24">
            <p>{format}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
