<!-- @format -->

<script>
import { Movie } from '@/models/Media'

export default {
	name: 'MovieDetails',
	props: {
		item: {
			type: Movie,
			required: true,
		},
	},
	computed: {
		runtimeInMinutes() {
			// Ensure that this.item.runtime is defined and is a number
			if (this.item && typeof this.item.runtime === 'number') {
				// Convert milliseconds into minutes and round down
				return Math.floor(this.item.runtime / 60000)
			}
			return null
		},
		director() {
			// Assuming director is stored under artistName inside item
			return this.item.artistName || 'Unknown'
		},
	},
}
</script>

<template>
	<div class="movie">
		<img
			v-if="item.artworkUrl100"
			:src="item.artworkUrl100"
			alt="Movie Cover"
			class="movie-cover justify-content-center" />
		<h5 class="mt-2">{{ item.title }}</h5>
		<p>Director: {{ item.director }}</p>
		<!-- Assuming director is given as artistName -->
		<p>Runtime: {{ runtimeInMinutes }} Min</p>
		<!-- Now using the computed property -->
		<p>Genre: {{ item.genre }}</p>

		<button
			class="btn btn-primary btn-sm mt-2 mb-2"
			type="button"
			data-bs-toggle="collapse"
			:data-bs-target="'#descriptionCollapse-' + item.id"
			aria-expanded="false"
			:aria-controls="'descriptionCollapse-' + item.id">
			Description
		</button>

		<!-- Collapsable Description Section -->
		<div :id="'descriptionCollapse-' + item.id" class="collapse">
			<div class="card card-body">
				{{ item.description }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
.movie-cover {
	display: flex;
	width: 150px;
	height: auto;
	margin: auto;
	border-radius: 5px;
}
</style>
