import type { PageLoad } from './$types';

export const load: PageLoad = async( { fetch }) => {

 const properties =  await fetch('/api/easybroker/properties');
 const contacts = fetch	('/api/easybroker/contact_requests');

  const [ propResponse, contResponse ] = await Promise.all([ properties, contacts ]);

 return {
  properties: propResponse.ok ? await propResponse.json() : undefined,
  contacts: contResponse.ok ? await contResponse.json() : undefined,
 }
}