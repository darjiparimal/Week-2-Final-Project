import { animeList } from "./animeData";
import { movies } from "./moviesData";

// Pick first 5 anime + first 5 movies
export const spotlightItems = [
  ...animeList.slice(0, 5),
  ...movies.slice(0, 5)
];
