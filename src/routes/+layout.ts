import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {

	// console.log(data);
  
	if (data.role !== "Administrator") {
		throw redirect(307, '/dashboard');
	}	
};