<template>
  <div class="login__wrapper">
    <Logo color="#0288D1" width="40" height="40" />
    <h1 class="mt-12">Log In</h1>
    <LoginForm />
    <h5 class="mt-7">
      <eLink
        href="/register"
        text="Don't have an Account? Sign Up"
        color="secondary"
      />
    </h5>
    <h5 class="mt-5">
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
import LoginForm from '@/components/auth/LoginForm.vue'

@Component({
  layout: 'guest',
  components: {
    eLink,
    Logo,
    LoginForm
  }
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.login {
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
