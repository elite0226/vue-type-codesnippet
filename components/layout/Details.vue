<template>
  <v-navigation-drawer
    :value="details"
    disable-resize-watcher
    right
    fixed
    app
    :width="460"
    light
    class="elevation-5 details"
  >
    <v-layout column fill-height>
      <!-- LOADER -->
      <eLoader v-if="fetching" />

      <!-- CONTENT -->
      <v-card flat v-else>
        <AssetDetails v-if="page === 'map-assets'" />
        <AnalyzeDetails v-if="page === 'map-analyze'" />
      </v-card>

      <v-spacer />

      <v-card flat class="details__close">
        <v-btn
          fab
          small
          color="grey lighten-3 elevation-0 square"
          @click="setResetSelected(true)"
        >
          <v-icon color="grey">mdi-forwardburger</v-icon>
        </v-btn>
      </v-card>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

import AssetDetails from '@/components/asset/AssetDetails.vue'
import AnalyzeDetails from '@/components/asset/AnalyzeDetails.vue'
import eLoader from '@/components/elements/eLoader.vue'

const layout = namespace('layout')
const asset = namespace('asset')

@Component({
  components: {
    AssetDetails,
    AnalyzeDetails,
    eLoader
  }
})
export default class Details extends Vue {
  @layout.State
  public page!: String

  @layout.State
  public details!: Boolean

  @asset.Getter
  public fetching!: Boolean

  @asset.Mutation
  setResetSelected!: (data: Boolean) => void
}
</script>

<style lang="scss">
.details {
  &__close {
    padding: 40px;
  }
  .v-tabs {
    border-bottom: 1px solid #e1e3e6;
    &-bar:not(.v-slide-group--is-overflowing) {
      padding: 0 40px;
    }
  }
  .v-window {
    .v-window-item {
      .v-card {
        padding: 0 40px;
        &__text {
          padding: 16px 0;
        }
      }
    }
  }
}
</style>
