import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Movie } from '~/store/moviediscover/data/Movie'
import { fetchMovies } from '../data/MovieRepository';

@Module({name: 'moviediscover/domain/MovieModule', stateFactory: true, namespaced: true })
class MovieModule extends VuexModule {

    private listMovie: Array<Movie> = []

    get movies() {
        return this.listMovie;
    }

    @Mutation
    private setMovies(listMovie: Array<Movie>) {
        this.listMovie = listMovie
    }

    @Action
    getMovies() {
        fetchMovies()
        .then( response => { this.setMovies(response.results) })
        .catch( _ => { console.log('error cuk!' ) })
    }
}

export default MovieModule
