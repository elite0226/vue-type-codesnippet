<template>
  <v-btn v-bind="props" text nuxt :to="href">{{ text }}</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class eButton extends Vue {
  @Prop({ type: String, required: true }) text!: string
  @Prop(String) href!: string

  get props(): object {
    return this.$attrs
  }
}
</script>

<style lang="scss" scoped></style>
