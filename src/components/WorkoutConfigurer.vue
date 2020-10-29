<template>
  <v-container>
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
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            time : 0,
            categories : [
                {name : 'Cardio', selected : true},
                {name : 'Pectoraux', selected : true},
                {name : 'Abdos', selected : true},
                {name : 'Jambes', selected : true},
                {name : 'Bras', selected : true},
            ]
        }
    }
}
</script>

<style>

</style> 