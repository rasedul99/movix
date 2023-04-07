import Image from "next/image";
import React from "react";

async function MovieDetail({ params }) {
  const { movie } = params;
  console.log(movie);
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=c519e2de4141bdfbaf299c3ece6ba3a3`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full "
        src={imagePath + res.backdrop_path}
        alt={res.title}
        width={1000}
        height={1000}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
}

export default MovieDetail;
