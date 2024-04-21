<!-- @format -->
<template>
	<nav class="navbar bg-dark">
		<span class="navbar-brand text-light"><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
	</nav>
	<div class="mx-auto order-0">
		<h1 class="text-center my-5">Search Apple's iTunes</h1>
		<form id="search" class="mx-auto mb-3" @submit.prevent="search">
			<input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="searchTerm" />
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</div>

	<div id="app" class="container-fluid mt-3">
		<div v-if="searching" class="text-center search">Searching..</div>
		<LibraryItemList
			v-else-if="!searching"
			:library="library"
			:bag="userBag"
			@update-bag="removeFromBag"
			@add-bag="addItemToBag"
			@empty-bag="emptyBag" />

		<BagItemList :bag="userBag" @update-bag="removeFromBag"></BagItemList>
	</div>
</template>
<script>
import BagItemList from '@/components/BagItemList.vue'
import LibraryItemList from '@/components/LibraryItemList.vue'
import Bag from '@/models/Bag.js'
import ITunesApiService from '@/models/ITunesApiService'
import { LibraryCollection } from '@/models/LibraryCollection.js'

export default {
	components: { LibraryItemList, BagItemList },
	data() {
		return {
			searchTerm: '',
			userBag: new Bag(),
			library: new LibraryCollection(),
			searching: true,
		}
	},
	methods: {
		addItemToBag(item) {
			item.inCart
			console.log(item.inCart)
			this.userBag.addItem(item)
		},
		emptyBag() {
			this.userBag.emptyBag()
		},
		removeFromBag(item) {
			this.userBag.removeItem(item)
		},

		async search() {
			if (this.searchTerm) {
				this.searching = true

				try {
					console.log('Search term:', this.searchTerm)

					const results = await ITunesApiService.search({ term: this.searchTerm })

					console.log('Results:', results)

					if (results.length === 0) {
						console.warn('No results found for the given search term.')
					}

					this.library.clearItems()

					results.forEach((mediaItem) => {
						this.library.addItem(mediaItem)
					})

					console.log('Updated Library:', this.library.items)
				} catch (error) {
					console.error('axios search error', error)
				} finally {
					this.searching = false
				}
			}
		},
	},

	mounted() {
		this.search()
	},
}
</script>

<style scoped>
#search {
	display: flex;
	max-width: 400px;
}
</style>
