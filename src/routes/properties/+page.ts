import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/easybroker/properties');

  const properties = await response.json();

  return{
    properties
  }	
	
};