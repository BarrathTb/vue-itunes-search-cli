<!-- @format -->

<template>
	<div class="podcast">
		<img v-if="item.artworkUrl100" :src="item.artworkUrl100" alt="Podcast Cover" class="podcast-cover" />
		<h5 class="mt-2">{{ item.title }}</h5>
		<p>Host: {{ item.artist }}</p>
		<p>Genre: {{ item.genre }}</p>
		<p>Runtime: {{ runtimeInMinutes }} Min</p>
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
	computed: {
		runtimeInMinutes() {
			// Ensure that this.item.runtime is defined and is a number
			if (this.item && typeof this.item.runtime === 'number') {
				// Convert milliseconds into minutes and round down
				return Math.floor(this.item.runtime / 60000)
			}
			return null
		},
	},
}
</script>

<style scoped></style>
