import { Movie } from "../data/Movie";

export interface MovieModule {
    listMovie: Array<Movie>
    getMovies(): void
}