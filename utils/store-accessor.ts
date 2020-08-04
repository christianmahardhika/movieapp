/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MovieModuleImpl from '~/store/moviediscover/domain/MovieModuleImpl'

let movieModule: MovieModuleImpl

function initialiseStores(store: Store<any>): void {
  movieModule = getModule(MovieModuleImpl, store)
}

export { initialiseStores, movieModule }