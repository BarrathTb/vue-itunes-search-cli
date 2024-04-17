<!-- @format -->

<template>
	<div class="card">
		<div class="img-container">
			<img :src="movie.artworkUrl100" class="card-img-top" alt="Movie Poster" />
		</div>

		<div class="card-body">
			<h5 class="card-title">{{ movie.trackName }}</h5>
			<p class="card-text">{{ movie.primaryGenreName }}</p>
			<p class="card-text">{{ formattedReleaseDate }}</p>
			<a :href="movie.previewUrl" class="btn btn-primary" target="_blank">Preview</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MovieDetails',
	props: {
		movie: {
			type: Object,
			required: true,
		},
	},
	computed: {
		formattedReleaseDate() {
			if (this.movie.releaseDate) {
				return this.$moment(this.movie.releaseDate).format('MMMM Do YYYY')
			} else {
				return 'Unknown'
			}
		},
	},
}
</script>

<style scoped></style>
