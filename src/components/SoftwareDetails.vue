<!-- @format -->

<template>
	<div class="card">
		<div class="img-container">
			<img :src="item.image" class="card-img-top" alt="Software Cover" />
		</div>

		<div class="card-body">
			<h5 class="card-title">{{ item.title }}</h5>
			<p class="card-text">Developer: {{ item.developer }}</p>
			<p class="card-text">Category: {{ item.category }}</p>
			<p class="card-text">Price: ${{ item.price }}</p>
			<p class="card-text">Type: {{ item.type }}</p>
		</div>
	</div>
</template>

<script>
import { Software } from '../models/Media.js'
export default {
	name: 'SoftwareDetails',
	props: {
		item: {
			type: Software,
		},
	},
}
</script>

<style scoped></style>
