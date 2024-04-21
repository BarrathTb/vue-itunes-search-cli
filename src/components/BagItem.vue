<!-- @format -->

<script>
import AlbumDetails from '@/components/AlbumDetails.vue'
import BookDetails from '@/components/BookDetails.vue'
import MovieDetails from '@/components/MovieDetails.vue'
export default {
	name: 'BagItem',
	components: { BookDetails, MovieDetails, AlbumDetails },
	props: {
		item: {
			type: Object,
		},
	},
}
</script>

<template>
	<div class="card h-100">
		<div class="card-body">
			<component :is="item.constructor.detailsComponent" :item="item"></component>
		</div>
		<div class="card-footer d-flex justify-content-end">
			<button class="btn btn-outline-danger" @click="$emit('remove-item', item)">Remove Item</button>
		</div>
	</div>
</template>
