import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  MutationAction
} from 'vuex-module-decorators'

@Module({ stateFactory: true, namespaced: true })
export default class Layout extends VuexModule {
  sidebar: boolean = true
  details: boolean = false
  page: string | null | undefined = null

  get showDetails() {
    return this.details
  }

  @Mutation
  setSidebar(value: boolean) {
    this.sidebar = value
    this.details = !value
  }

  @Mutation
  setDetails(value: boolean) {
    this.details = value
    this.sidebar = !value
  }

  @Mutation
  setPage(value: string | null | undefined) {
    this.page = value
  }
}
