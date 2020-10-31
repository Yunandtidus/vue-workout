import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import WorkoutConfigurer from '@/views/WorkoutConfigurer.vue';
import Workout from '@/views/Workout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'workout-config',
    component: WorkoutConfigurer,
  },
  {
    path: '/workout',
    name: 'workout',
    component: Workout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
