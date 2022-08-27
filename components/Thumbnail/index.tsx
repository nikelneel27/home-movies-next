import { useContext, useState } from "react";
import { Movie } from "../../types";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { getTrailer } from "../../Utils/Api";
import { valContext } from "../Contexts/context";

interface Props {
  mov: Movie[];
}

function Thumbnail({ mov }: any) {
  // let date = mov.release_date;
  // let year = date.split(/[ -]/);

  // console.log(date);

  const [showModal, setShowModal, movieId, setMovieId] =
    useContext<any>(valContext);

  const handleModal = (id: number) => {
    // console.log("id-clicked", id);
    setShowModal(!showModal);
    setMovieId(id);
  };
  // console.log("movid", movieId);

  return (
    <>
      <div className="relative z-10 h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`}
          layout="fill"
        />

        <div className="flex flex-row z-12 absolute top-2 left-2 rounded px-1.5 py-2.5 justify-center items-center bg-black w-14 h-4 text-base">
          <FaStar className="text-yellow-400  w-2 h-2 md:w-4 md:h-4" />
          <p className="text-sm ml-1">{mov.vote_average.toFixed(1)}</p>
        </div>
        <div className="absolute bottom-2 left-2">
          <div>{mov.original_title}</div>
          <div>
            <p className="text-[0.7rem] font-light">{mov.release_date}</p>
          </div>
          <div>
            <button
              onClick={() => handleModal(mov.id)}
              className="bg-red-500 rounded px-2 text-sm text-white"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
      {/* {showModal && <Modal trailerId={mov.id} />} */}
    </>
  );
}

export default Thumbnail;
