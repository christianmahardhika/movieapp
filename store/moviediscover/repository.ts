import axios from 'axios';
import {
  Result,
} from './type';

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export async function fetchMovieDisc(): Promise<Result> {
  const response = await movieApi.get('/discover/movie?api_key=95e87c5acbcfa3a1b0d4df3e1a73755b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  return response.data.result as Result
}