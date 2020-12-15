<template>
  <v-snackbar v-model="snackbar" content-class="alert">
    {{ message }}
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

const alert = namespace('alert')

@Component
export default class eAlert extends Vue {
  @alert.State
  public open!: boolean

  @alert.State
  public message!: string

  get snackbar() {
    return this.open
  }

  set snackbar(value) {
    this.$store.commit('alert/setOpen', value)
  }
}
</script>

<style lang="scss">
.alert {
  font-size: 16px;
}
</style>
