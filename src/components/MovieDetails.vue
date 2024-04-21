<!-- @format -->

<script>
import { Movie } from '@/models/Media.js'

export default {
	name: 'MovieDetails',
	props: {
		item: {
			type: Movie,
		},
	},
}
</script>

<template>
	<div class="movie">
		<img v-if="item.artworkUrl100" :src="item.artworkUrl100" alt="Movie Cover" class="movie-cover" />
		<h3>{{ item.trackName }}</h3>
		<p>Director: {{ item.artistName }}</p>
		<!-- Assuming director is given as artistName -->
		<p>Runtime: {{ item.runtime }}</p>
		<!-- Convert from millis if necessary -->
		<p>Genre: {{ item.primaryGenreName }}</p>
	</div>
</template>

<style scoped></style>
