const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  getTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default requests;
