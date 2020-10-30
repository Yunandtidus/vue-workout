<template>
  <v-stepper-content step="1" class="text-center">
    <v-radio-group v-model="type">
      <v-radio v-for="type in types" :key="type" class="ma-3" :label="type" :value="type"></v-radio>
    </v-radio-group>
  </v-stepper-content>
</template>

<script type="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Step1 extends Vue {
  types = ['Yoga', 'Muscu', 'Cardio'];

  type = null;
}
</script>

<style>
</style>
