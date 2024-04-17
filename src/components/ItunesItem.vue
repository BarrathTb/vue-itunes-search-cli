<!-- @format -->

<template>
	<component :is="detailsComponent" :item="media" />
</template>

<script>
import MediaFactory from '@/models/MediaFactory.js'

export default {
	name: 'ItunesItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	computed: {
		media() {
			return MediaFactory.createMedia(this.item)
		},
		detailsComponent() {
			return MediaFactory.displayComponent(this.media)
		},
	},
}
</script>

<style scoped>
.card {
	width: 18rem;
	margin-bottom: 1rem;
}

.img-container {
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.card-img-top {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}

.card-body {
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card-title {
}

.card-text {
}
</style>
