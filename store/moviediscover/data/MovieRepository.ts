import {
  Movie,
} from './Movie';
import { Api, customParams } from '~/store/api/ApiProvider';
import { BaseResponse } from '~/store/api/response/BaseResponse';

export async function fetchMovies(): Promise<BaseResponse<Movie[]>> {
  const response = await Api.get('/discover/movie', {
      params: customParams({ 
        'sort_by': 'popularity.desc',
        'include_adult': false,
        'include_video': false,
        'page': 1
      })
    }
  )
  return response.data
}
