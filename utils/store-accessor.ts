/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MovieModule from '~/store/moviediscover/domain/MovieModule'

let movieModule: MovieModule

function initialiseStores(store: Store<any>): void {
  movieModule = getModule(MovieModule, store)
}

export { initialiseStores, movieModule }