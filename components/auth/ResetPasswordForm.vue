<template>
  <v-form class="reset-password-form">
    <eInput
      v-model="form.email"
      name="email"
      placeholder="Email"
      append-icon="mdi-account-circle"
    />
    <eButton class="mt-4" label="Send recovery link" color="primary" />
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import eInput from '@/components/elements/eInput.vue'
import eButton from '@/components/elements/eButton.vue'

@Component({
  components: {
    eInput,
    eButton
  }
})
export default class ResetPasswordForm extends Vue {
  form: object = {
    email: '',
    password: ''
  }
}
</script>

<style lang="scss" scoped>
.reset-password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
}
</style>
