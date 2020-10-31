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
    <v-row>
      <v-col class="text-center">
        <v-btn color="primary" @click="startWorkout">Commencer</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script type="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Step1 from '@/components/configurer/steps/Step1.vue';
import Step2 from '@/components/configurer/steps/Step2.vue';
import Step3 from '@/components/configurer/steps/Step3.vue';

@Component({
  components: {
    Step1,
    Step2,
    Step3,
  },
})
export default class WorkoutConfigurer extends Vue {
  startWorkout() {
    this.$router.push({ name: 'workout' });
  }
}
</script>

<style>
</style>
