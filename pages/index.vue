<template></template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'guest'
})
export default class HomePage extends Vue {
  created() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push('/dashboard')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
