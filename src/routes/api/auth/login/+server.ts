import { redirect } from '@sveltejs/kit';
import pkce from 'pkce-gen';
import type { RequestHandler } from './$types';
import { EASYBORKER_APP_CLIENT_ID} from '$env/static/private'


const generateRandomString = (length: number) => {
	let randomString = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}
	return randomString;
};

const state = generateRandomString(16);
const challenge = pkce.create();

const user = {
  first_name: "Enrique",
  email: "emarines@live.com.mx",
  id: "izone16s",
  role: "Administrator",
  // role: "User"
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Authorization': EASYBORKER_APP_CLIENT_ID
  }
};

export const GET: RequestHandler = async({ cookies, fetch }) => {
  const response = fetch('https://api.easybroker.com/v1/contact_requests', options) //Login en EasyBorker desactivado para pruebas

  if((await response).status === 200){ 
    cookies.set('first_name', user.first_name, {path: "/"})
    cookies.set('useremail', user.email, {path: "/"})
    cookies.set('userid', user.id, {path: "/"})
    cookies.set('role', user.role, {path: "/"})
    cookies.set('state', state, {path: "/"});
    cookies.set('easybroker_challenge', challenge.code_verifier, {path: "/"});

  } 
  
  throw redirect(307, '/api/auth/callback')

};