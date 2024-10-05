<script lang="ts">
	import { PropertyPage } from '$components'
	import type { PageData } from './$types';

	export let data: PageData;

	let publicUrl = "";

	$: property = data.property;
	$: color = data.color;


	function urtPublic () {
		publicUrl = (data.property.public_url).replace('easybroker.com/mx/listings', 'matchhome.net/property')
	}
	urtPublic();

</script>

		<PropertyPage
			 	title = {property.title}
				{color}
				image = {property.property_images.length > 0 ? property.property_images[0].url : undefined}
				id = {property.public_id}
				areas = {
				property.construction_size ? `Construcción ${property.construction_size} m²
				 · Terreno ${property.lot_size} m²` : `Terreno: ${property.lot_size} m²`
				}

				features = {
				property.property_type !== "Terreno" ? 
				`${property.bedrooms} habitaciones · ${property.bathrooms} baños · ${property.parking_spaces} estacionamientos` : ""}

				prcice = {property.operations[0].formatted_amount
				}
				>
				
				<p class="meta" slot="meta"></p>
			
				<p>
					<span class="date">Alta el: {new Date(property.created_at).toLocaleDateString('en', {dateStyle: 'medium'})}
				</p>
				<a href={publicUrl} target="_blank">Ver en MatchHome.net</a>


				<div class="credits">
					<p class="date">
						{new Date(property.created_at).toLocaleDateString('en', {
							dateStyle: 'medium'
						})}
					</p>
					<span class="artists">
						{`${property.tags.length} Etiqueta${property.tags.length	> 1 ? 's' : ""}: ${property.tags.map((tag) => tag).join(', ')}.`}
					</span>	
					<p>{property.description}</p>

				</div>

		</PropertyPage>	
		


	<style lang="scss">
		.meta {
			font-size: functions.toRem(13);
			font-weight: 600;
			span {
				margin-right: 5px;
				&.tracks-count {
					font-weight: 400;
					margin: 0 0 0 5px;
					color: var(--light-gray);
				}
			}
		}
		.credits {
			margin-top: 40px;
			p {
				color: var(--light-gray);
				margin: 0;
				font-size: functions.toRem(11);
				&.date {
					font-size: functions.toRem(13);
				}
			}
		}
	</style>

	