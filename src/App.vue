<!-- @format -->

<template>
	<nav class="navbar bg-dark">
		<span class="navbar-brand text-light"><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
	</nav>

	<div id="app" class="container-fluid mt-3">
		<!-- <LibraryItemList></LibraryItemList> -->
		<ItunesApi></ItunesApi>
	</div>
</template>

<script>
import ItunesApi from './components/ItunesApi.vue'
// import LibraryItemList from './components/LibraryItemList.vue'

export default {
	components: {
		// LibraryItemList,
		ItunesApi,
	},
}
</script>

<style scoped></style>
