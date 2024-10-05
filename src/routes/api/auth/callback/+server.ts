import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';


export const GET: RequestHandler = async({cookies} ) => {
  const state = cookies.get('state') || null;
  const storedState = cookies.get('easybroker_challenge') || null;

  const role = cookies.get('role')

  if (state === null || storedState === null){
    throw error(400, "State Mismatch")
  }
  if(role === "Administrator"){
    throw redirect(303, '/dashboard')
  } else {
    throw redirect(303, '/')    
  }

};
