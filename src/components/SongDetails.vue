<!-- @format -->

<template>
	<div class="song">
		<img
			v-if="item.artworkUrl100"
			:src="item.artworkUrl100"
			alt="Song Cover"
			class="song-cover justify-content-center" />
		<h5 class="mt-2">{{ item.title }}</h5>
		<p>Artist: {{ item.artist }}</p>
		<p>Album: {{ item.album }}</p>
		<p>Explicit: {{ item.explicitness }}</p>
	</div>
</template>

<script>
import { Song } from '../models/Media.js'
export default {
	name: 'SongDetails',
	props: {
		item: {
			type: Song,
		},
	},
}
</script>

<style scoped>
.song-cover {
	display: flex;
	width: 150px;
	height: auto;
	margin: auto;
	border-radius: 5px;
}
</style>
