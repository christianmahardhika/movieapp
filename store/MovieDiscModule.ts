import { Module, VuexModule, Mutation, Action, MutationAction} from 'vuex-module-decorators'
import { Result } from '@/store/moviediscover/type'
import axios from "axios";


@Module({name: 'MovieDiscModule', stateFactory: true, namespaced: true })
class MovieDiscModule extends VuexModule {
    // list: Result[] = []
    list: Array<Result> = []

    @MutationAction
    async getMovieDisc() {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key={PUT_YOUR_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    const list = response.data.results
    return { list }
    }
}

export default MovieDiscModule
