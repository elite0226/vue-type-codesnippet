<template>
  <v-card flat class="sidebar__card d-flex align-center pb-4">
    <div
      class="sidebar__icon-wrapper"
      :class="{ none: !icon, active: isActive }"
    >
      <v-icon
        class="sidebar__icon pa-2"
        :class="{ active: isActive }"
        v-if="icon"
        >{{ icon }}</v-icon
      >
    </div>
    <eButton
      class="sidebar__text"
      :class="{ 'v-btn--active': isActive }"
      anchor
      :to="to"
      :label="text"
      text
    />
  </v-card>
</template>
<!-- BUTTON -->
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import eButton from '@/components/elements/eButton.vue'

@Component({
  components: {
    eButton
  }
})
export default class eSidebarItem extends Vue {
  @Prop({ type: String, required: false }) icon!: string

  @Prop({ type: String, required: false }) text!: string

  @Prop({ type: String, required: false }) to!: string

  get isActive(): boolean {
    return this.to === this.$nuxt.$route.path
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.sidebar {
  &__card {
    background-color: transparent;
    &.parent {
      padding-bottom: 8px;
    }
  }
  &__icon-wrapper {
    display: flex;
    background-color: rgba(17, 0, 0, 0.08);
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 12px !important;
    &.active {
      border: 4px solid #0288d1;
    }
    &.none {
      background-color: transparent;
      height: 0px;
    }
  }
  &__icon {
    font-size: 16px;
    background-color: #3c3c3e;
    color: #9ca2a8;
    &.active {
      color: #0288d1;
    }
  }
  &__content-wrapper {
    height: 40px;
    width: 40px;
  }
  &__text {
    margin-left: 8px;
    padding: 0 12px;
    color: #9ca2a8;
    opacity: 1;
  }
}
</style>
