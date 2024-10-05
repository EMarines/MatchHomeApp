import type { PageLoad } from './$types';

export const load: PageLoad = async( { fetch }) => {

 const response =  await fetch('/api/easybroker/properties');
 const response2 =  await fetch('/api/easybroker/contact_requests');

  const properties = await response.json()
  const contacts = await response2.json()

 return {
  properties,
  contacts
 }
}