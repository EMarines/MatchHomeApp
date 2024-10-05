<script lang="ts">
  import { Home } from 'lucide-svelte'
  export let property

  
</script>

<div class="card">
  {#if property.title_image_thumb}
    <img loading="lazy" src={property.title_image_thumb} alt={property.title} />
  {:else }
    <div class="cover-placeholder">
			<Home aria-hidden="true" focusable="false" color="var(--light-gray)" />
		</div> 
  {/if}
  <h4 class="truncate-1" title={property.location}>{property.location}</h4>
  <p>{property.operations[0].amount}</p>
  <p class="truncate-2" title={property.title}>{property.title}</p>
</div>


<style lang="scss">
	.card {
    width: 150px;
		background-color: var(--dark-gray);
		padding: 10px;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
		border-radius: 4px;
		transition: background 0.3s;
		&:hover {
			background-color: var(--medium-gray);
			.cover-placeholder {
				background-color: var(--dark-gray);
			}
		}
    h4 {
			margin: 0 0 10px;
			font-size: functions.toRem(16);
			font-weight: 600;
			line-height: 1;
			a {
				text-decoration: none;
				color: var(--text-color);
				&:focus-visible {
					outline: none;
					&:after {
						outline: 2px solid var(--accent-color);
					}
				}
				&:after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					border-radius: 4px;
				}
			}
		}
		p {
			position: relative;
			margin: 0;
			color: var(--light-gray);
			font-size: functions.toRem(14);
		}
		img {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
			margin: 0 0 20px;
		}
		.cover-placeholder {
			width: 100%;
			aspect-ratio: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--medium-gray);
			margin: 0 0 20px;
			transition: background 0.3s;
			:global(svg) {
				width: 40%;
				height: 40%;
			}
		}
	}
</style>