//_components/Card.jsx
import Link from "next/link";

async function CardComponent({ data }) {
  return (
    <>
      <div className="grid grid-flow-col gap-5 auto-cols-[28%] overflow-x-auto scroll_bar mb-5">
        {data.payload.map((e) => (
          <Link href={`/view-movie-details/${e.movie_id}`} key={e.movie_id}>
            <div className="bg-white p-4 rounded-md">
              <img
              className="rounded-md"
                src={`${e.image == ""?"https://www.whats-on-netflix.com/wp-content/uploads/2020/01/parasite-movie-coming-to-netflix.jpg":e.image}`}
                alt=""
              />
              <div>
                <p className="line-clamp-1 text-xl font-bold my-2">
                  {e.movie_title}
                </p>
                <p className="line-clamp-2">{e.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default CardComponent;
