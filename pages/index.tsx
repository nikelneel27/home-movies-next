import type { NextPage } from "next";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { Movie } from "../types";
import { valContext } from "../components/Contexts/context";
import {
  getTrending,
  getComedyMovies,
  getRomanticMovies,
  getNetflixOriginals,
  getActionMovies,
  getDocumentaries,
  getHorrorMovies,
  getTopRated,
  getTrailer,
} from "../Utils/Api";
// import getRomanticMovies from "../Utils/Api";
// import getDocumentaries from "../Utils/Api";
// import getTopRatedMovies from "../Utils/Api";
// import getNetflixOriginals from "../Utils/Api";
// import getHorrorMovies from "../Utils/Api";
// import getActionMovies from "../Utils/Api";
// import getComedyMovies from "../Utils/Api";
import requests from "../Utils/Requests";
import Banner from "../components/Banner";
import Sections from "../components/Sections";
import Modal from "../components/Modal";

interface Props {
  trendingNow: Movie[];
  netflixOriginals: Movie[];
  romanticMovies: Movie[];
  actionMovies: Movie[];
  documentaries: Movie[];
  horrorMovies: Movie[];
  comedyMovies: Movie[];
  topRatedMovies: Movie[];
}

const Home = ({
  trendingNow,
  netflixOriginals,
  romanticMovies,
  topRatedMovies,
  actionMovies,
  documentaries,
  horrorMovies,
  comedyMovies,
}: Props) => {
  const [movieId, setMovieId] = useState<any>();
  const [showModal, setShowModal] = useState<any>(false);
  const [trailerKey, setTrailerKey] = useState<any>();

  const getTrailerID = async () => {
    const abc = await getTrailer(movieId);
    console.log("abc", abc);
    const trailerKey = abc.videos.results[0].key;
    setTrailerKey(trailerKey);
    console.log(trailerKey);
  };

  useEffect(() => {
    getTrailerID();
  }, [movieId]);
  console.log("index-movieId", movieId);

  return (
    <div className="relative min-h-screen lg:h-[140vh] bg-gradient-to-b from gray-900/10 to-[#010511] ">
      <Head>
        <title>Home Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <valContext.Provider
        value={[showModal, setShowModal, movieId, setMovieId, trailerKey]}
      >
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <Banner trendingNow={trendingNow} />

          <section className="md:space-y-24">
            <Sections title="Trending Now" movies={trendingNow} />
            <Sections title="Romance Movies" movies={romanticMovies} />
            <Sections title="Action Movies" movies={actionMovies} />
            <Sections title="Documentaries" movies={documentaries} />
            <Sections title="Comedy Movies" movies={comedyMovies} />
            <Sections title="Horror Movies" movies={horrorMovies} />
            <Sections title="Netflix Originals" movies={netflixOriginals} />
            <Sections title="Top Rated" movies={topRatedMovies} />
          </section>
        </main>
        <div className="absolute top-0 left-0 z-50">
          {showModal && <Modal trailerId={movieId} />}
        </div>
      </valContext.Provider>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const trendingNow = await getTrending();
  const netflixOriginals = await getNetflixOriginals();
  const romanticMovies = await getRomanticMovies();
  const horrorMovies = await getHorrorMovies();
  const actionMovies = await getActionMovies();
  const documentaries = await getDocumentaries();

  const comedyMovies = await getComedyMovies();
  const topRatedMovies = await getTopRated();
  return {
    props: {
      trendingNow: trendingNow.results,
      netflixOriginals: netflixOriginals.results,
      romanticMovies: romanticMovies.results,
      actionMovies: actionMovies.results,
      documentaries: documentaries.results,
      horrorMovies: horrorMovies.results,
      comedyMovies: comedyMovies.results,
      topRatedMovies: topRatedMovies.results,
    },
  };
};
