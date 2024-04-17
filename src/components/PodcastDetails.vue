<!-- @format -->

<template>
	<div class="card">
		<div class="img-container">
			<img :src="podcast.artworkUrl100" class="card-img-top" alt="Album Artwork" />
		</div>
		<div class="card-body">
			<h5 class="card-title">{{ podcast.trackName }}</h5>
			<p class="card-text">{{ podcast.collectionName }}</p>

			<p class="card-text">{{ formattedDuration }}</p>
			<a :href="podcast.previewUrl" class="btn btn-primary" target="_blank">Preview</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PodcastDetails',
	props: {
		podcast: {
			type: Object,
			required: true,
		},
	},
	computed: {
		formattedDuration() {
			if (this.podcast.trackTimeMillis) {
				return this.$moment.duration(this.podcast.trackTimeMillis / 1000).format('h[h] mm[m]')
			} else {
				return 'Unknown'
			}
		},
	},
}
</script>

<style scoped></style>
