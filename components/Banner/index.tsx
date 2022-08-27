import Image from "next/image";
import { useState, useEffect } from "react";
import { Movie } from "../../types";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/outline";

interface Props {
  trendingNow: Movie[];
}

function Banner({ trendingNow }: Props) {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie(trendingNow[Math.floor(Math.random() * trendingNow.length)]);
  }, [trendingNow]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  const img = movie?.backdrop_path;
  return (
    <div className="text-white w-full bg-gradient-to-b from gray-900/10 to-[#010511] flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 -z-10 h-[95vh] w-screen opacity-85">
        <Image src={`${base_url}${img}`} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-[7%] w-[40%] left-[5%] ">
        <div className="mb-3 md:mb-6">
          <p className="text-2xl md:text-4xl font-bold mb-1 md:mb-4">
            {movie?.title || movie?.name || movie?.original_name}
          </p>
          <p className="text-white font-light text-sm md:text-lg">
            {movie?.overview}
          </p>
          {/* <p>{movie?.vote_average}</p> */}
          {/* <p>{movie?.adult}</p> */}
        </div>
        <div>
          <div className="flex space-x-2 md:space-x-5">
            <button className="flex font-semibold items-center gap-x-2 bg-[white] text-sm md:text-xl text-black px-5 hover:opacity-75 md:px-8 md:py-1.5 py-2 rounded-[0.5rem]">
              Play
              <FaPlay className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="flex font-semibold items-center gap-x-2 bg-[white] text-sm md:text-xl text-black px-5 md:px-6 md:py-1.5 py-2 rounded-[0.5rem] hover:opacity-75 bg-[gray]/70">
              More Info
              <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
