<template>
  <v-card tile class="loader fill-height d-flex align-center justify-center">
    <v-progress-circular indeterminate color="grey lighten-1" />
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class eLoader extends Vue {}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
