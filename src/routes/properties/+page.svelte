<script lang="ts">
	import { page } from "$app/stores";
	import { CardProperty, Button } from "$components";
	import type { PageData } from "./$types";

	export let data: PageData;

	$: properties = data.properties.content;
	let currentPage = 1
	$: currPage = currentPage

	let isLoading = false;

	async function loadMoreItems() {
		if(!properties) {
			return
		}
		isLoading = true
		let toFetch = `/api/easybroker/properties?limit=18&page=${currPage}`
		const res = await fetch(toFetch);

		if(res.ok) {
			const nextProperties = await res.json()
			properties = nextProperties.content
		} else {
			alert("Error: " + res.statusText)
		}
		isLoading = false
	}
	function nextPage() {
		currentPage = currentPage + 1
		loadMoreItems()
	}
	function previousPage() {
		currentPage = currentPage - 1
		loadMoreItems()
	}

</script>

<h4>Ingresaste como {$page.data.first_name}</h4>

<h1>Total de Propiedades en Inventario { data.properties.pagination.total}</h1>

<div class="card_container">
  {#each properties as property}
    <div class="grid_items">
			<a href="/property/{property.public_id}">
				<CardProperty {property}/>{property.public_id}
			</a>       
    </div>
		{/each}
	</div>

	<div class="pagination">
		<Button 
			element="button"
				variant="outline"
				disabled={isLoading}
				on:click={previousPage}
			>
			← Previous Page <span class="visually-hidden">Items</span>
		</Button>
		<Button
		element="button"
				variant="outline"
				disabled={isLoading}
				on:click={nextPage}
			>
				Next Page  → <span class="visually-hidden">Items</span>
		</Button>
	</div>

<style lang="scss">
	.content-row {
		margin-bottom: 40px;
		.content-row-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;
			.section-title {
				font-size: functions.toRem(22);
				font-weight: 600;
				margin: 0;
			}
		}
	}
  .card_container {      
    display: flex;
    flex-wrap: wrap;
    width: 90%;
  }

	.pagination {
		display: flex;
		justify-content: center;
    width: 90%;
		gap: 10px;
		margin-top: 20px;
	}

</style>