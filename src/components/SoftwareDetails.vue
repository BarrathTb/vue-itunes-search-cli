<!-- @format -->

<template>
	<div class="software-card">
		<div class="card-body">
			<h5 class="card-title">{{ software.title }}</h5>
			<p class="developer-name">Developer: {{ software.softwareDeveloper }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SoftwareDetails',
	props: {
		software: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped></style>
