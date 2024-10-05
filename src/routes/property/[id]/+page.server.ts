import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async({ params, fetch }) => {

  const response =await fetch(`/api/easybroker/properties/${params.id}`, )

  const property = await response.json()

  let color = null;
  if (property.property_images.length > 0) {
		const colorRes = await fetch(
			`/api/average-color?${new URLSearchParams({
				image: property.property_images[0].url
			}).toString()}`
		);
		if (colorRes.ok) {
			color = (await colorRes.json()).color;
		}
	}

  if (response.ok) {
		return {
			property,
      color
		};
	}
  throw redirect(303, '/properties')

};