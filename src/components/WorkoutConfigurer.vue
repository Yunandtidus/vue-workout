<template>
  <v-container>
      <v-stepper non-linear
      value="1"
      class="mt-12"
    >
      <v-stepper-header>
        <v-stepper-step
          step="1"
          editable
        >
          Type
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" editable>
          Zone de travail
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" editable>
          Durée / difficulté
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
        <v-form>
            <v-text-field type="numeric" label="Durée" v-model="time"/>
                <div class="text-center">
                    <v-chip
                        v-for="cat in categories"
                        :color="cat.selected ? 'blue' : ''"
                        class="ma-2"
                        :key="cat.name"
                        @click="cat.selected = !cat.selected">
                        {{ cat.name }}
                    </v-chip>
                </div>
        </v-form>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script type="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component({})
export default class WorkoutConfigurer extends Vue {
    time = 0;

    @State('categories') categories;
}
</script>

<style>

</style>
