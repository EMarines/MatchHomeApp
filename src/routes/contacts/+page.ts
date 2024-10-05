import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/easybroker/contact_requests');
  const response2 = await fetch('/api/easybroker/properties')

  const contacts = await response.json();
  const properties = await response2.json();

  // console.log(contacts, "contacts desde page.ts");

  return{
    contacts,
    properties
  }	
	
};