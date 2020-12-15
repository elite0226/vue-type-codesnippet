<template>
  <v-form v-model="form.isValid" class="signup-form">
    <eInput
      v-model="form.fullName"
      name="fullName"
      placeholder="Full Name"
      append-icon="mdi-account-circle"
      :rules="[(v) => !!v || 'Full Name is required']"
      autofocus
    />
    <eInput
      v-model="form.email"
      name="email"
      placeholder="Email"
      append-icon="mdi-email-variant"
      :rules="rules.email"
    />
    <eInput
      v-model="form.organization"
      name="organization"
      placeholder="Organization"
      append-icon="mdi-domain"
      :rules="[(v) => !!v || 'Organization is required']"
    />
    <eInput
      v-model="form.password"
      name="password"
      type="password"
      placeholder="Password"
      append-icon="mdi-lock"
      :rules="rules.password"
      error-count="5"
    />
    <eInput
      v-model="form.confirmPassword"
      name="confirmPassword"
      type="password"
      placeholder="Confirm password"
      append-icon="mdi-lock"
      :rules="[(v) => v === form.password || 'Password must be matched']"
    />
    <h5 class="text-center">
      By clicking Get Started, you agree to our
      <a class="primary--text">Terms</a>,
      <a class="primary--text">Data Policy</a> and
      <a class="primary--text">Cookies Policy</a>.
    </h5>
    <eButton
      class="mt-4"
      label="Get Started"
      color="primary"
      :disabled="!form.isValid"
    />
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import eInput from '@/components/elements/eInput.vue'
import eButton from '@/components/elements/eButton.vue'

@Component({
  components: {
    eInput,
    eButton
  }
})
export default class SignupForm extends Vue {
  form: object = {
    fullName: '',
    email: '',
    organization: '',
    password: '',
    confirmPassword: '',
    isValid: true
  }

  rules: object = {
    email: [
      (v: any) => !!v || 'Email is required',
      (v: any) => /\S+@\S+\.\S+/.test(v) || 'Email must be valid'
    ],
    password: [
      (v: any) => !!v || 'Password is required',
      (v: any) => (v && v.length >= 5) || 'Password must have 5+ characters',
      (v: any) => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      (v: any) => /(?=.*\d)/.test(v) || 'Must have one number',
      (v: any) =>
        /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }
}
</script>

<style lang="scss" scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
}
</style>
