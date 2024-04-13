<template>
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            <div class="col" v-for="item in library">
                <library-item :item="item" @remove="item => library.remove(item)" :remove-item="() => library.remove(item)"></library-item>
            </div>
        </div>
</template>

<script>
  import LibraryItem from "@/components/LibraryItem.vue";
import LibraryCollection from "@/models/LibraryCollection.js";
import { Book, Movie } from "@/models/Media.js";
  export default {
    name: 'LibraryItemList',
    components: {
      LibraryItem,

    },
    data() {
      return {
        library: new LibraryCollection()
          .add(new Book('Clean Code', 600))
          .add(new Movie('John Wick', 141))
          .add(new Movie('Lord of the Rings', 180))
          .add(new Book('1000 Miles Home', 345)),

      }
    }
  }
</script>
<style scoped>
</style>