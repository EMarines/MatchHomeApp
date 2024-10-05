// import { json, error } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// import { EASYBORKER_APP_CLIENT_ID } from '$env/static/private'

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'X-Authorization': EASYBORKER_APP_CLIENT_ID
//   }
// };

// export const GET: RequestHandler = async ({ fetch }) => {
// 	const res = await fetch('https://api.easybroker.com/v1/contact_requests?page=2&limit=5', options);
// 	if (res.ok) {
// 		const contacts = await res.json();

// 		return json(contacts);
// 	}
// 	throw error(res.status, res.statusText);
// };

