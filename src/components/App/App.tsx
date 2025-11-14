import fetchMovies from "../../services/movieService";
import type { Movie } from "../../types/movie";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (searchQuery: string) => {
    try {
      const fetchedMovies = await fetchMovies(searchQuery);
      setMovies(fetchedMovies);
      console.log("fetchedMovies:", fetchedMovies);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
