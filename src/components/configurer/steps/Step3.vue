<template>
  <v-stepper-content step="3">
    <v-text-field type="numeric" label="Durée" v-model="time" />
    <v-slider
      class="mt-5"
      v-model="difficulty"
      label="Difficulté"
      min="0"
      :max="difficulties.length-1"
      thumb-label="always"
    >
      <template v-slot:thumb-label style="font-size:6px">{{ difficulties[difficulty] }}</template>
    </v-slider>
  </v-stepper-content>
</template>

<script type="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Step3 extends Vue {
  time = 0;

  difficulties = ['+', '++', '+++'];

  difficulty = 0;
}
</script>

<style>
</style>
