import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export function customParams(params: any) {
    params['api_key'] = '{YOUR_API_KEY}'
    params['language'] = 'en-US'
    return params
}