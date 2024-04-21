<!-- @format -->

<template>
	<div class="card">
		<div class="img-container">
			<img :src="item.image" class="card-img-top" alt="TV Show Poster" />
		</div>

		<div class="card-body">
			<h5 class="card-title">{{ item.title }}</h5>
			<p class="card-text">Episode: {{ item.episodeName }}</p>
			<p class="card-text">Length: {{ item.length }} minutes</p>
			<p class="card-text">Type: {{ item.type }}</p>
		</div>
	</div>
</template>

<script>
import { TVShow } from '../models/Media.js'

export default {
	name: 'TvShowDetails',
	props: {
		item: {
			type: TVShow,
		},
	},
}
</script>

<style scoped></style>
