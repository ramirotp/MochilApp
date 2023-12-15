<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto" v-for="(backpack, i) in backPackStore.backpacks" :key="i"  class="ma-4 pa-4">

        <BackpackCard 
            :key="backpack.backPackId"
            :backpack="backpack"
          />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import BackpackCard from '@/components/BackpackCard.vue'
  import { useBackPackStore } from '../store/backPackStore.js';

  export default {
    setup() {
      const backPackStore = useBackPackStore();

      return { backPackStore }

    },
    components: { BackpackCard }
  }
</script>
