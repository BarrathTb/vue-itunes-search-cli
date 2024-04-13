<template>
<div class="card h-100" :class="{'border-warning': !item.isAvailable()}">
            <div class="card-body">
<!--                <component :is="typeOfItem" :item="item"></component>-->
                <component :is="item.constructor.detailsComponent" :item="item"></component>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <button class="btn btn-outline-danger" @click="$emit('remove', item)">Remove (emit)</button>
                <button class="btn btn-outline-danger" @click="removeItem">Remove (props)</button>
                <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
                <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
            </div>
        </div>
</template>

<script>
  import BookDetails from './BookDetails.vue';
import MovieDetails from './MovieDetails.vue';
  export default {
    name: "LibraryItem",
    components: {
      BookDetails,
        MovieDetails
        
      },
    props: {
        item: {
             type: Object,
            //type: [Book, Movie],
        },
        removeItem: {
            type: Function,
        }
    },
    computed: {
        // typeOfItem(){
        //     return this.item.constructor.type + 'Details'
        // }
    },
  }
</script>
<style scoped>
</style>