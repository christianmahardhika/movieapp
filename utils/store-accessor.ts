/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MovieDiscModule from '~/store/MovieDiscModule'

let movieStore: MovieDiscModule

function initialiseStores(store: Store<any>): void {
  movieStore = getModule(MovieDiscModule, store)
}

export { initialiseStores, movieStore }