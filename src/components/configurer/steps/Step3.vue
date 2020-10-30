<template>
  <v-stepper-content step="3">
    <v-text-field type="numeric" label="Durée" v-model="time" />
    <v-slider class="mt-5" v-model="difficulty" label="Difficulté" thumb-label="always"></v-slider>
  </v-stepper-content>
</template>

<script type="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Step3 extends Vue {
  time = 0;

  difficulty = '4';
}
</script>

<style>
</style>
