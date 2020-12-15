import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { sprintf } from 'sprintf-js'
import { AxiosResponse } from 'axios'

import { Pipe, PipeForm, SlideshowControl } from '...'
import { $axios } from '@/utils/api'
import { serializeKeys, deserializeKeys } from '@/utils/serialize'
import { hasKey } from '@/utils/general'
import { getAddressFromCoordinate } from '@/api/map'

import { GET_PIPE, UPDATE_PIPE } from '@/constants/urls.ts'

@Module({ stateFactory: true, namespaced: true })
export default class Asset extends VuexModule {
  loading: { fetching: boolean; updating: boolean } = {
    fetching: false,
    updating: false
  }

  resetSelected: boolean = false
  currentPipe: Pipe = {
    id: 0,
    nativePipeId: '',
    installYear: '',
    materialTypeCode: 0,
    diameter: 0,
    length: 0,
    address: '',
    locations: [],
    incidents: [],
    inspections: [],
    replacements: [],
    repairs: [],
    comments: []
  }

  slideshow: SlideshowControl = {
    show: false,
    images: [],
    start: 0
  }

  get fetching() {
    return this.loading.fetching
  }

  get updating() {
    return this.loading.updating
  }

  @Mutation
  setLoading(data: { type: string; value: boolean }) {
    const { type, value } = data
    if (hasKey(this.loading, type)) {
      this.loading[type] = value
    }
  }

  @Mutation
  setCurrentPipe(data: Pipe) {
    this.currentPipe = data
  }

  @Mutation
  setResetSelected(data: boolean) {
    this.resetSelected = data
  }

  @Mutation
  setSlideshow(data: { value: boolean; images: string[]; start: number }) {
    const { value, images, start } = data
    this.slideshow = {
      show: value,
      images: images,
      start: start
    }
  }

  @Action
  async fetchPipe(id: number) {
    this.context.commit('setLoading', { type: 'fetching', value: true })

    const { data }: AxiosResponse = await $axios.get(sprintf(GET_PIPE, id))

    const serializedData: Pipe = serializeKeys(data)

    serializedData.id = id
    serializedData.address = await getAddressFromCoordinate(
      serializedData.locations[0]
    )
    serializedData.diameter = Number(data.diameter)
    serializedData.locations = serializedData.locations.map(
      (location: number[]) => {
        return { latitude: location[1], longitude: location[0] }
      }
    )

    this.context.commit('setCurrentPipe', serializedData)
    this.context.commit('setLoading', { type: 'fetching', value: false })

    return serializedData
  }

  @Action
  async updatePipe(pipe: PipeForm) {
    this.context.commit('setLoading', { type: 'updating', value: true })

    await $axios.put(sprintf(UPDATE_PIPE, pipe.id), deserializeKeys(pipe))

    this.context.commit('setLoading', { type: 'updating', value: false })
  }
}
