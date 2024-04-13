<template>
  <div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p v-if="item.runtime" class="card-text">Runtime: {{ item.runtime }}</p>
        </div>
</template>

<script>
 import { Movie } from "@/models/Media.js";
  export default {
     props: {
        item: {
            type: Movie,
        },
    },
  }
</script>
<style scoped>
</style>