<template>
  <v-stepper-content step="2">
    <div class="text-center">
      <v-chip
        v-for="cat in categories"
        :color="cat.selected ? 'blue' : ''"
        class="ma-2"
        :key="cat.name"
        @click="cat.selected = !cat.selected"
      >{{ cat.name }}</v-chip>
    </div>
  </v-stepper-content>
</template>

<script type="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Step2 extends Vue {
  @State('categories') categories;
}
</script>

<style>
</style>
