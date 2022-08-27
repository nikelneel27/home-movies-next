import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrending = () => {
  return axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
};
export const getRomanticMovies = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
    )
    .then((res) => res.data);
};

export const getActionMovies = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
    )
    .then((res) => res.data);
};
export const getHorrorMovies = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
    )
    .then((res) => res.data);
};
export const getComedyMovies = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
    )
    .then((res) => res.data);
};
export const getTopRated = () => {
  return axios
    .get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
};
export const getNetflixOriginals = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`
    )
    .then((res) => res.data);
};
export const getDocumentaries = () => {
  return axios
    .get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
    )
    .then((res) => res.data);
};

export const getTrailer = (id: number) => {
  console.log("getrailer", id);
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
    .then((res) => res.data);
};
