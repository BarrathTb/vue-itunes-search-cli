<!-- @format -->

<template>
	<div>
		<h2 class="my-4 text-center">Bag Items</h2>
		<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
			<div class="col" v-for="item in bag.items" :key="item.title">
				<bag-item :item="item" @remove-item="removeFromBag"></bag-item>
			</div>
		</div>
		<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-1 justify-content-center mb-2">
			<input class="mt-2" v-model="checkoutName" placeholder="Enter your name" />
			<button class="btn btn-outline-success mt-2" @click="checkoutItems">Checkout</button>
		</div>
	</div>
</template>

<script>
import BagItem from '@/components/BagItem.vue'
import Bag from '@/models/Bag'

export default {
	name: 'BagItemList',
	components: {
		BagItem,
	},
	data() {
		return {
			checkoutName: '',
		}
	},
	props: {
		bag: {
			type: Bag,
			required: true,
		},
	},
	methods: {
		removeFromBag(item) {
			this.bag.removeItem(item)
		},
		checkoutItems() {
			this.bag.items.forEach((item) => {
				item.checkOut(this.checkoutName)
			})
			this.checkoutName = ''
		},
	},
}
</script>
