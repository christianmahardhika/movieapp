import { BaseResponse } from "~/store/api/response/BaseResponse";
import { Movie } from "../data/Movie";

export interface MovieRepository {
    fetchMovies(): Promise<BaseResponse<Movie[]>>
}