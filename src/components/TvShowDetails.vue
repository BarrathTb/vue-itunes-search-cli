<!-- @format -->

<template>
	<div class="tvshow-card">
		<div class="card-body">
			<h5 class="card-title">{{ tvshow.title }}</h5>
			<p class="show-term">Show: {{ tvshow.showTerm }}</p>
			<p class="episode-term">Episode: {{ tvshow.episodeTerm }}</p>
			<p class="season-term">Season: {{ tvshow.seasonTerm }}</p>
			<p class="genre-name">Genre: {{ tvshow.genre }}</p>
			<p class="description-text">Description: {{ tvshow.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TvShowDetails',
	props: {
		tvshow: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped></style>
