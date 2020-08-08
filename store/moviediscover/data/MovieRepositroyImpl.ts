import { MovieRepository } from "../domain/MovieRepository";
import { BaseResponse } from "~/store/api/response/BaseResponse";
import { Api, customParams } from "~/store/api/ApiProvider";
import { Movie } from "./Movie";

const movieRepository: MovieRepository = {
    async fetchMovies(): Promise<BaseResponse<Movie[]>> {
      var response = await Api.get('/discover/movie', {
          params: customParams({ 
              'sort_by': 'popularity.desc',
              'include_adult': false,
              'include_video': false,
              'page': 1
          })    
      })
      return response.data
    }
}

export default movieRepository;
  