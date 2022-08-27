import { useContext } from "react";
import { valContext } from "../Contexts/context";
import YouTube from "react-youtube";

import ReactPlayer from "react-player/youtube";
const Modal = ({}: any) => {
  const [trailerKey] = useContext<any>(valContext);
  const url = "https://www.youtube.com/watch?v=";
  return (
    <div className=" relative w-[20rem] h-[20rem] bg-red-600">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width="100%"
        height="100%"
        playing
      />
      <YouTube videoId={trailerKey} />
      {/* <YouTubePlayer embedId="rokGy0huYEA" /> */}
      <iframe src={`https://www.youtube.com/watch?v=${trailerKey}`}></iframe>
    </div>
  );
};

export default Modal;
