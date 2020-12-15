<template>
  <v-app-bar app clipped-left>
    <div class="topbar">
      <FullLogo @click.native="handleClickLogo" />
      <div class="icon__wrapper">
        <v-icon>mdi-earth</v-icon>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import FullLogo from '@/components/layout/FullLogo.vue'

@Component({
  components: {
    FullLogo
  }
})
export default class Topbar extends Vue {
  handleClickLogo() {
    this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
}
</style>
