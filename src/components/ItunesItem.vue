<!-- @format -->

<template>
	<div class="card">
		<div class="img-container">
			<img :src="item.artworkUrl100" class="card-img-top" alt="Album Artwork" />
		</div>
		<div class="card-body">
			<h5 class="card-title">{{ item.trackName }}</h5>
			<p class="card-text">{{ item.artistName }}</p>

			<a :href="item.previewUrl" class="btn btn-primary" target="_blank">Preview</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItunesItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.card {
	width: 18rem; /* Fixed width for the card */
	margin-bottom: 1rem;
}

.img-container {
	height: 200px; /* Fixed height for image container */
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.card-img-top {
	max-width: 100%; /* Limit image width to not exceed container */
	max-height: 100%; /* Limit image height to not exceed container */
	object-fit: contain; /* Prevent image distortion */
}

.card-body {
	height: 150px; /* Fixed height for the card body to ensure consistency */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card-title {
	/* Additional styles for title if necessary */
}

.card-text {
	/* Additional styles for text if necessary */
}
</style>
