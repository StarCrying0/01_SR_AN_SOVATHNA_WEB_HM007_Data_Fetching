//_components/Card.jsx
import Link from "next/link";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";
async function CardComponent({ data }) {
  return (
    <>
      <Carousel>
        <CarouselContent className="grid grid-flow-col gap-5 auto-cols-[28%] mb-5 ml-2 ">
        {data.payload.map((e) => (
          <Link href={`/view-movie-details/${e.movie_id}`} key={e.movie_id}>
            <div className="bg-white p-4 rounded-md">
              <img
                className="rounded-md h-[260px] w-full object-cover"
                src={`${
                  e.image == ""
                    ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                    : e.image
                }`}
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
        </CarouselContent>
      </Carousel>
    </>
  );
}
export default CardComponent;
