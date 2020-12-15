<template>
  <div class="signup__wrapper">
    <Logo color="#0288D1" width="40" height="40" />
    <h1 class="mt-12">Create your Account</h1>
    <SignupForm />
    <h5 class="mt-7">
      <eLink href="/login" text="Have an Account? Sign In" color="secondary" />
    </h5>
    <h5 class="my-5">
      <eLink
        href="/forgot-password"
        text="Forgot Password?"
        color="secondary"
      />
    </h5>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import eLink from '@/components/elements/eLink.vue'

import Logo from '@/components/layout/Logo.vue'
import SignupForm from '@/components/auth/SignupForm.vue'

@Component({
  layout: 'guest',
  components: {
    eLink,
    Logo,
    SignupForm
  }
})
export default class Signup extends Vue {}
</script>

<style lang="scss" scoped>
.signup {
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
