<!-- @format -->

<template>
	<div class="itunes-search">
		<h1>iTunes Search</h1>
		<form @submit.prevent="searchiTunes">
			<input v-model="searchTerm" type="text" placeholder="Enter search term..." />
			<button type="submit">Search</button>
		</form>

		<div v-if="loading" class="loader">Loading...</div>

		<div v-if="results.length > 0">
			<h2 class="results-heading">Results:</h2>
			<div class="results row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
				<div class="col" v-for="item in results" :key="item.trackId">
					<itunes-item :item="item"></itunes-item>
				</div>
			</div>
		</div>

		<div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
	</div>
</template>

<script>
import ItunesService from '../models/ItunesService'
import ItunesItem from './ItunesItem.vue'
export default {
	components: {
		ItunesItem,
	},

	name: 'ItunesSearch',
	data() {
		return {
			searchTerm: '',
			results: [],
			loading: false,
			errorMessage: '',
		}
	},
	methods: {
		async searchiTunes() {
			if (this.searchTerm.trim() === '') {
				this.errorMessage = 'Please enter a search term.'
				return
			}

			this.loading = true
			this.results = []
			this.errorMessage = ''

			try {
				const itunesService = new ItunesService()
				this.results = await itunesService.search(this.searchTerm)
			} catch (error) {
				console.error('Error during iTunes search:', error)
				this.errorMessage = 'An error occurred while searching. Please try again.'
			} finally {
				this.loading = false
			}
		},
	},
}
</script>

<style scoped>
.itunes-search {
	margin: auto;
	text-align: center;
}

.results-heading {
	text-align: center;
	margin-top: 20px; /* Adjust spacing as needed */
	margin-bottom: 10px; /* Adjust spacing as needed */
}

.results {
	list-style-type: none;
	padding: 0;
	justify-content: center;
}

.loader,
.error-message {
	color: #ff0000;
}
</style>
