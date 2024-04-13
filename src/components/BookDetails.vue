<template>
<div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p v-if="item.pages" class="card-text">Pages: {{ item.pages }}</p>
        </div>
</template>

<script>
 import { Book } from "@/models/Media.js";
  export default {
     props: {
        item: {
            type: Book,
        },
    },
  }
</script>
<style scoped lang="scss">
@import '@/scss/_variables.scss';
h3{
  color: $primary;
}
</style>