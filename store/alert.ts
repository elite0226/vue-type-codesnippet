import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  MutationAction
} from 'vuex-module-decorators'

import { alertMessages } from '@/constants/messages'

@Module({ stateFactory: true, namespaced: true })
export default class Layout extends VuexModule {
  open: Boolean = false
  message: String = ''

  @Mutation
  setOpen(value: Boolean) {
    this.open = value
  }

  @Mutation
  setError() {
    this.message = alertMessages.error
    this.open = true
  }

  @Mutation
  setNoSupport() {
    this.message = alertMessages.noSupport
    this.open = true
  }

  @Mutation
  setMessage(value: string) {
    this.message = value
    this.open = true
  }
}
