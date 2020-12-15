<template>
  <v-navigation-drawer
    :mini-variant="!sidebar"
    hide-overlay
    app
    color="secondary"
  >
    <div class="d-flex flex-column" @click="sidebarClicked">
      <div class="logo__wrapper" :class="{ collapsed: !sidebar }">
        <Logo />
      </div>
      <div
        class="sidebar__wrapper d-flex flex-column fill-height"
        :class="{ collapsed: !sidebar }"
      >
        <eSidebarItem
          v-for="(item, i) in items"
          :key="i"
          :icon="item.icon"
          :text="item.text"
          :to="item.to"
          :submenu="item.submenu"
        />

        <v-spacer />

        <eSidebarItem
          icon="mdi-account-circle"
          :text="fullName"
          @click.native="handleLogout"
        />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'

import eSidebarItem from '@/components/elements/eSidebarItem.vue'
import Logo from '@/components/layout/Logo.vue'

const layout = namespace('layout')
const asset = namespace('asset')

@Component({
  components: {
    eSidebarItem,
    Logo
  }
})
export default class Sidebar extends Vue {
  @layout.State
  public sidebar!: Boolean

  @asset.Mutation
  setResetSelected!: (data: Boolean) => void

  items: Array<object> = [
    { icon: 'mdi-apps', text: 'Dashboard', to: '/dashboard' },
    { icon: 'mdi-map', text: 'View Assets', to: '/map/assets' },
    { icon: 'mdi-magnify', text: 'Analyze', to: '/map/analyze' },
    { icon: 'mdi-hammer-wrench', text: 'Fieldwork', to: '/map/fieldwork' },
    {
      icon: 'mdi-chart-arc',
      text: 'Reports',
      to: '/reports'
    }
  ]

  get fullName(): string {
    return this.$auth.$state.user.full_name
  }

  sidebarClicked() {
    if (!this.sidebar) {
      this.setResetSelected(true)
    }
  }

  handleLogout() {
    this.$auth.logout()
    this.$router.push('/login')
  }
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.logo__wrapper {
  padding: 50px 0 0 50px;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) $layoutTransitionDuration;
  &.collapsed {
    padding-left: 14px;
  }
}
.sidebar__wrapper {
  position: absolute;
  padding: 155px 0 0 40px;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) $layoutTransitionDuration;
  &.collapsed {
    padding-left: 4px;
    .sidebar__text {
      opacity: 0;
    }
  }
}
</style>
