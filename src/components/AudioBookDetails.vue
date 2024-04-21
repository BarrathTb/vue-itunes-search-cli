<!-- @format -->

<script>
import { AudioBook } from '@/models/Media.js'

export default {
	name: 'AudioBookDetails',
	props: {
		item: {
			type: AudioBook,
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

<template>
	<div class="audio-book">
		<img
			v-if="item.artworkUrl100"
			:src="item.artworkUrl100"
			alt="Audio Cover"
			class="audio-cover justify-content-center" />
		<h5 class="mt-2">{{ item.title }}</h5>
		<p>Author: {{ item.artist }}</p>
		<p>Runtime: {{ runtimeInMinutes }} Min</p>
		<p>Genre: {{ item.genre }}</p>

		<!-- Toggle Button for Description -->
		<button
			class="btn btn-primary btn-sm mt-2 mb-2"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#descriptionCollapse"
			aria-expanded="false"
			aria-controls="descriptionCollapse">
			Description
		</button>

		<!-- Collapsable Description Section -->
		<div class="collapse" id="descriptionCollapse">
			<div class="card card-body">
				{{ item.description }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
.audio-cover {
	display: flex;
	width: 150px;
	height: auto;
	margin: auto;
	border-radius: 5px;
}
</style>
