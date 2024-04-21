<!-- @format -->

<script>
import { Book } from '@/models/Media.js'

export default {
	name: 'BookDetails',
	props: {
		item: {
			type: Book,
		},
	},
}
</script>

<template>
	<div class="book">
		<h3 class="card-title">{{ item.title }}</h3>
		<p v-if="item.pages" class="card-text">Pages: {{ item.pages }}</p>
	</div>
</template>

<style scoped lang="scss">
@import '@/scss/variables';
h3 {
	color: $primary;
}
</style>
