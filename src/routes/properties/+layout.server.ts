import type { LayoutServerLoad } from './$types';
import { EASYBORKER_APP_CLIENT_ID } from '$env/static/private'
import { redirect } from "@sveltejs/kit";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Authorization': EASYBORKER_APP_CLIENT_ID
  }
};

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
  const accessToken = cookies.get('state')
  if(accessToken) {
    const response = await fetch('api/easybroker/properties');
    // const res = await fetch('api/contacts', options)
    // const res = await fetch('https://api.easybroker.com/v1/contact_requests?page=1&limit=2', options)
    // console.log(await response.json(), "properties *****************************");
    const properties = await response.json()
    // const contacts = await res.json()
    const userDisplay = cookies.get('useremail')
  //   if(response.status === 200) {
      
        return { 
          properties,
          // contacts,
          userDisplay
        }
  //     } else {
  //       return {
  //         properties: null,
  //         // contacts: null,
  //         userDisplay: null
  //       }
  //     }
  //   } 
  // else {
  //   throw redirect(307, '/api/auth/login')
  // }
  };
};