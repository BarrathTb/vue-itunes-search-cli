<!-- @format -->

<template>
	<h2 class="my-4 text-center">Library Items</h2>
	<div class="row row-cols-1 px-2 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 justify-content-between">
		<LibraryItem v-for="(thing, i) in library.items" :item="thing" :key="i" @add-bag="addToBag"></LibraryItem>
	</div>
</template>

<script>
import LibraryItem from './LibraryItem.vue'

export default {
	name: 'LibraryItemList',
	components: {
		LibraryItem,
	},
	props: {
		library: {
			type: Object,
			required: true,
		},
		bag: Object,
	},
	methods: {
		addToBag(item) {
			console.log('from the library')
			this.$emit('add-bag', item)
		},
	},
	emits: ['update-bag', 'add-bag', 'empty-bag'],
}
</script>
