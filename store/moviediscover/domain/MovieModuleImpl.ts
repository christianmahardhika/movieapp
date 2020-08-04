import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Movie } from '~/store/moviediscover/data/Movie'
import { fetchMovies } from '../data/MovieRepository';
import { MovieModule } from '../domain/MovieModule'

@Module({name: 'moviediscover/domain/MovieModuleImpl', stateFactory: true, namespaced: true })
class MovieModuleImpl extends VuexModule implements MovieModule {

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
        fetchMovies()
        .then( response => { this.setMovies(response.results) })
        .catch( _ => { console.log('error cuk!' ) })
    }
}

export default MovieModuleImpl
