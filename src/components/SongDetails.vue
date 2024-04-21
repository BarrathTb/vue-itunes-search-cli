<!-- @format -->

<template>
	<div class="song">
		<img v-if="item.artworkUrl100" :src="item.artworkUrl100" alt="Song Cover" class="song-cover" />
		<h3>{{ item.trackName }}</h3>
		<p>Artist: {{ item.artistName }}</p>
		<p>Album: {{ item.collectionName }}</p>
		<p>Explicit: {{ item.trackExplicitness }}</p>
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

<style scoped></style>
