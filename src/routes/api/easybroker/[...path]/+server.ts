import type { RequestHandler} from './$types';
import { EASYBROKER_BASE_URL_CONTACT, EASYBORKER_APP_CLIENT_ID } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Authorization': EASYBORKER_APP_CLIENT_ID
  }
}

export const GET: RequestHandler = async ({ fetch, params, url }) => {

  const response = await fetch(`${EASYBROKER_BASE_URL_CONTACT}/${params.path}${url.search}.url`, options)

  const responseJSON = await response.json();

  if(responseJSON.error){
    throw error(responseJSON.error.status, responseJSON.error.message)
  }

  return json(responseJSON)

}