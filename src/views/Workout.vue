<template>
  <v-container>
    Run
    <Timer :time="10.0" />
  </v-container>
</template>

<script type="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Timer from '@/components/timer/Timer.vue';

@Component({
  components: { Timer },
})
export default class Workout extends Vue {}
</script>

<style>
</style>
