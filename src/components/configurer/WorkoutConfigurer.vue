<template>
  <v-container>
    <v-stepper non-linear value="1" class="mt-12">
      <v-stepper-header>
        <v-stepper-step step="1" editable>Type</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" editable>Zone de travail</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable>Durée / difficulté</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <Step1></Step1>
        <Step2></Step2>
        <Step3></Step3>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script type="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Step1 from './steps/Step1.vue';
import Step2 from './steps/Step2.vue';
import Step3 from './steps/Step3.vue';

@Component({
  components: {
    Step1,
    Step2,
    Step3,
  },
})
export default class WorkoutConfigurer extends Vue {}
</script>

<style>
</style>
