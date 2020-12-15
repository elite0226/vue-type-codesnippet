<template>
  <v-alert class="w-full" type="error">
    <p class="font-weight-bold">Error</p>
    <p v-for="(text, index) in errorTexts" :key="index" class="mb-1">
      {{ text.key }}: {{ text.value }}
    </p>
  </v-alert>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { AxiosError } from 'axios'

import { ucFirst } from '@/utils/general.ts'

type ErrorType = {
  key: string
  value: string
}

@Component
export default class eError extends Vue {
  @Prop() error!: AxiosError

  get errorTexts(): Array<ErrorType> {
    const errors = this.error?.response?.data?.errors

    return errors
      ? Object.keys(errors).map((key) => ({
          key: ucFirst(key),
          value: errors[key].toString()
        }))
      : []
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  border-radius: 10px !important;
  background-color: #3c3c3e;
  color: #9ca2a8;
  &.v-btn--active {
    color: #fff;
  }
}
.v-btn.v-btn--text {
  border-radius: 10px !important;
  color: #9ca2a8;
  &.v-btn--active {
    color: #fff;
    &:before {
      opacity: 0;
    }
  }
}
</style>
