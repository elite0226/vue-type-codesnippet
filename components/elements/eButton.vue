<template>
  <v-btn v-bind="props" depressed nuxt :to="to">{{ label }}</v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class eButton extends Vue {
  @Prop({ type: String, required: true }) label!: string
  @Prop(String) to!: string
  @Prop({ type: Boolean, default: false }) primary!: Boolean

  get props(): object {
    return this.$attrs
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
