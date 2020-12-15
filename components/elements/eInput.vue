<template>
  <v-text-field
    :value="value"
    class="input"
    v-bind="props"
    outlined
    dense
    @change="handleChange"
  >
    <template v-slot:message="{ message }">
      <li style="margin: 4px 0;">{{ message }}</li>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  model: {
    prop: 'value',
    event: 'change'
  }
})
export default class eInput extends Vue {
  @Prop(String) value!: string

  get props(): object {
    return this.$attrs
  }

  handleChange(value: string): void {
    this.$emit('change', value)
  }
}
</script>

<style lang="scss">
.input {
  width: 100%;
  & .v-input__slot {
    background-color: #fdfdfe !important;

    &:focus {
      outline: none;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    }
    & input,
    & i {
      color: #666769;
    }
    & input {
      &::placeholder {
        color: #404143;
      }
    }
  }
}
</style>
