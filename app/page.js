import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=c519e2de4141bdfbaf299c3ece6ba3a3`
  );
  const res = await data.json();

  return (
    <main>
      <h1>hello</h1>
      <div className="grid  lg:grid-cols-5 md:grid-cols-3 gap-2">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
