import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Movie } from '~/store/moviediscover/data/Movie'
import movieRepository from '../data/MovieRepositroyImpl';

@Module({name: 'moviediscover/domain/MovieModule', stateFactory: true, namespaced: true })
class MovieModule extends VuexModule {

    listMovie: Array<Movie> = []

    get movies() {
        return this.listMovie;
    }

    @Mutation
    private setMovies(listMovie: Array<Movie>) {
        this.listMovie = listMovie
    }

    @Action
    getMovies() {
        movieRepository
        .fetchMovies()
        .then( response => { this.setMovies(response.results) })
        .catch( error => { console.log(error) })
    }
}

export default MovieModule
