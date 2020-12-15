<template>
  <v-footer class="footer">
    <span class="black--text">
      Copyright &copy; {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  padding: 25px 0;
  justify-content: center;
  background-color: #ececec;
  border-top: 1px solid #9ca2a8;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12);
}
</style>
