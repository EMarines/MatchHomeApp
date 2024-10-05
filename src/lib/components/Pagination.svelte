<script lang="ts">
	import { page } from "$app/stores";
  import { Button } from "$components";
  import { createEventDispatcher } from "svelte";
  
  export let paginatedList: {
    href: any;
    items: any[];
    limit: any;
    next_page: any;
    offset: any;
    previous_page: any;
    total: any;
    page: number;
  }
  export let isLoading: boolean = false;

  const dispatch = createEventDispatcher<{
		loadmore: {};
	}>();

  $: currentPage= $page.data.properties.pagination.page || 1
  $: previusPage =paginatedList.page
  $: console.log(previusPage, "previusPage desde pagination.svelte");

</script>

{#if paginatedList.next_page}
	<div class="load-more">
		<Button
			element="button"
			variant="outline"
			disabled={isLoading}
      on:click={() => dispatch('loadmore', {})}
		>
			Next Page →<span class="visually-hidden">Items</span>
		</Button>
	</div>
{/if}

{#if !previusPage}
	<div class="load-more">
		<Button
			element="button"
			variant="outline"
			disabled={isLoading}
      on:click={() => dispatch('loadmore', {})}
		>
    ← Previous Page <span class="visually-hidden">Items</span>
		</Button>
	</div>
{/if}

<div class="pagination">
  <div class="previos">
    {#if paginatedList.previous_page}
      <Button element="a" variant="outline" href="{$page.data.pagination.next_page}?{new URLSearchParams({page: `${Number(currentPage) -1}`})}">
        ← Previous Page
      </Button>
    {/if}
  </div>

  <div class="next">
    {#if paginatedList.next_page}
      <Button element="a" variant="outline" href="{paginatedList.next_page}?{new URLSearchParams({page: `${Number(currentPage) +1}`})}">
        Next Page →
      </Button>
    {/if}
  </div>
</div>

<style lang="scss">
	.pagination {
		display: none;
		justify-content: space-between;
		:global(html.no-js) & {
			display: flex;
		}
	}
	.load-more {
		padding: 15px;
		text-align: center;
		:global(html.no-js) & {
			display: none;
		}
	}
</style>