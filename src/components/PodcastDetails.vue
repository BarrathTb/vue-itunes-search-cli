<!-- @format -->

<template>
	<div class="podcast">
		<img v-if="item.artworkUrl100" :src="item.artworkUrl100" alt="Podcast Cover" class="podcast-cover" />
		<h3>{{ item.collectionName }}</h3>
		<p>Host: {{ item.artistName }}</p>
		<p>Genre: {{ item.primaryGenreName }}</p>
	</div>
</template>

<script>
import { Podcast } from '../models/Media.js'
export default {
	name: 'PodcastDetails',
	props: {
		item: {
			type: Podcast,
		},
	},
}
</script>

<style scoped></style>
