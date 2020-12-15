<template>
  <div class="reset-password__wrapper">
    <Logo color="#0288D1" width="40" height="40" />
    <h1 class="mt-12">Forgot Password</h1>
    <ResetPasswordForm />
    <h5 class="mt-7">
      <eLink href="/login" text="Back to login" color="secondary" />
    </h5>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import eLink from '@/components/elements/eLink.vue'

import Logo from '@/components/layout/Logo.vue'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue'

@Component({
  layout: 'guest',
  components: {
    eLink,
    Logo,
    ResetPasswordForm
  }
})
export default class ResetPassword extends Vue {}
</script>

<style lang="scss" scoped>
.reset-password {
  &__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ececec;
    color: #404143;
  }
}
.link {
  color: #404143;
  text-decoration: none;
}
</style>
