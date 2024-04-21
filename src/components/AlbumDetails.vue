<!-- @format -->

<template>
	<div class="album">
		<img
			v-if="item.artworkUrl100"
			:src="item.artworkUrl100"
			alt="Album Cover"
			class="album-cover justify-content-center" />
		<h5 class="mt-2">{{ item.title }}</h5>
		<h3>{{ item.collectionName }}</h3>
		<p>Artist: {{ item.artistName }}</p>
		<p>Tracks: {{ item.trackCount }}</p>
	</div>
</template>

<script>
import { Album } from '@/models/Media.js'

export default {
	name: 'AlbumDetails',
	props: {
		item: {
			type: Object,
			required: true,
			validator(item) {
				return item instanceof Album
			},
		},
	},
}
</script>

<!-- Add your styles here -->
<style scoped>
.album {
	margin: auto;
	padding: 20px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 80%;
}

.album-cover {
	display: flex;
	width: 150px;
	height: auto;
	margin: auto;
	border-radius: 5px;
}

h3 {
	margin: 0;
	color: #333;
	font-size: 24px;
}

p {
	margin: 5px 0;
	color: #666;
}
</style>
