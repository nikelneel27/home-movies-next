import { Movie } from "../../types";
import Thumbnail from "../Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

function Sections({ title, movies }: Props) {
  let moviesData = movies;

  return (
    <div className="h-40 space-y-0.5 z-10 md:space-y-2">
      <div>
        <p>{title}</p>
      </div>
      <div className="relative md:-ml-2">
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {moviesData.map((movie) => (
            <Thumbnail key={movie.id} mov={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sections;
