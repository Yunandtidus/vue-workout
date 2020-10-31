<template>
  <v-card>
    <v-card-text class="text-center">
      <v-progress-circular
        class="ma-auto"
        :rotate="-90"
        :size="200"
        :width="25"
        :value="internalTime / time * 100"
        color="teal"
        style
      >
        <strong>{{ internalTime.toFixed(1) }}</strong>
        <span class="ml-1">/ {{ time.toFixed(1) }} s</span>
      </v-progress-circular>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn icon @click="running = true" :disabled="running || internalTime == time">
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn icon @click="running = false" :disabled="!running">
        <v-icon>mdi-pause</v-icon>
      </v-btn>
      <v-btn icon @click="startTimer">
        <v-icon>mdi-reload</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script type="ts">
import Vue from 'vue';
import { State } from 'vuex-class';
import { Prop, Component } from 'vue-property-decorator';

@Component({})
export default class Timer extends Vue {
  @Prop() time;

  @Prop({ default: 0.1 }) step;

  internalTime = 0;

  running = true;

  refresher;

  startTimer() {
    if (this.refresher) {
      clearInterval(this.refresher);
    }
    this.internalTime = 0;
    this.refresher = setInterval(() => {
      if (this.running) {
        this.internalTime += this.step;
        if (this.internalTime >= this.time) {
          this.internalTime = this.time;
          this.running = false;
          clearInterval(this.refresher);
        }
      }
    }, this.step * 1000);
  }

  created() {
    this.startTimer();
  }

  beforeDestroy() {
    clearInterval(this.refresher);
  }
}
</script>
<style>
.v-progress-circular__overlay {
  transition: all 0.1s ease-in-out;
}
</style>
