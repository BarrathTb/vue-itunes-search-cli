<!-- @format -->

<template>
	<h2 class="my-4 text-center">Library Items</h2>
	<div class="row row-cols-1 px-2 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 justify-content-between">
		<LibraryItem v-for="(item, i) in library.items" :item="item" :key="i" @add-bag="addToBag"></LibraryItem>
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

		removeFromBag(item) {
			console.log('from the bag')
			this.$emit('empty-bag', item)
		},

		checkoutItems() {
			this.$emit('update-bag')
		},
	},
	emits: ['update-bag', 'add-bag', 'empty-bag'],
}
</script>
