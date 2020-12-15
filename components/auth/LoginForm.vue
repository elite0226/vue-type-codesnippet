<template>
  <v-form v-model="form.isValid" class="login-form">
    <eError v-if="error" :error="error" />
    <eInput
      v-model="form.email"
      name="email"
      placeholder="Email"
      append-icon="mdi-account-circle"
      :rules="[(v) => !!v || 'Email is required']"
      autofocus
    />
    <eInput
      v-model="form.password"
      name="password"
      type="password"
      placeholder="Password"
      append-icon="mdi-lock"
      :rules="[(v) => !!v || 'Password is required']"
    />
    <eButton
      class="mt-4"
      label="Log In"
      color="primary"
      :disabled="!form.isValid"
      @click.native="handleSubmit"
    />
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { AxiosError } from 'axios'

import eInput from '@/components/elements/eInput.vue'
import eButton from '@/components/elements/eButton.vue'
import eError from '@/components/elements/eError.vue'

@Component({
  components: {
    eInput,
    eButton,
    eError
  }
})
export default class LoginForm extends Vue {
  form: object = {
    email: '',
    password: '',
    isValid: true
  }

  error: AxiosError | null = null

  async handleSubmit() {
    try {
      await this.$auth.loginWith('local', { data: this.form })
    } catch (err) {
      this.error = err
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
}
</style>
