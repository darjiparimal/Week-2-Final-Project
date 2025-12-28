// src/data/moviesData.js
import inception from "../assets/movies/inception.jpg";
import interstellar from "../assets/movies/interstellar.jpg";

export const movies = [
  {
    id: "inception",
    type: "movie",
    title: "Inception",
    image: inception,
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    rating: 8.8,
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "interstellar",
    type: "movie",
    title: "Interstellar",
    image: interstellar,
    description:
      "A team of explorers travel through a wormhole in space.",
    rating: 8.6,
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];
