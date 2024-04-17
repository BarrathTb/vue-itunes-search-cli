<!-- @format -->

<template>
	<div class="book-card">
		<div class="card-body">
			<h5 class="card-title">{{ book.title }}</h5>
			<p class="author-name">Author: {{ book.author }}</p>
			<p class="genre-name">Genre: {{ book.genre }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BookDetails',
	props: {
		book: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped></style>
