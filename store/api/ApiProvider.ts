import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export function customParams(params: any) {
    params['api_key'] = '6d9463ea75dd62fcccc52f2b0edc5214'
    params['language'] = 'en-US'
    return params
}