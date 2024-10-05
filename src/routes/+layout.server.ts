import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
export const load: LayoutServerLoad = async ({ cookies }) => {

  const accessToken = cookies.get('state')

  if(accessToken) { 
    const userDisplay = cookies.get('first_name')
    const first_name = cookies.get('first_name')
    const id = cookies.get("userid")
    const role = cookies.get("role")

    if(userDisplay) {      
        return { 
          userDisplay,
          first_name,
          id,
          role
        }
    } else {
        return {
          userDisplay: null,
          first_name: null,
          id: null,
          role: null
        }
    };

  } else {
    throw redirect(307, '/api/auth/login')
  };
};
    
