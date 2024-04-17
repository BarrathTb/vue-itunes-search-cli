<!-- @format -->

<template>
	<div class="music-card">
		<div class="card-body">
			<h5 class="card-title">{{ music.title }}</h5>
			<p class="artist-name">Artist: {{ music.artist }}</p>
			<p class="genre-name">Genre: {{ music.genre }}</p>
			<p class="album-name">Album: {{ music.album }}</p>
			<p class="composer-name">Composer: {{ music.composer }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MusicDetails',
	props: {
		music: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped></style>
