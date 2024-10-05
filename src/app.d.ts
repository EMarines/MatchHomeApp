// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user: {
				"id": "",
				"full_name": "",
				"first_name": "",
				"last_name": "",
				"title": "",
				"company": "",
				"private_description": "",
				"userDisplay": "",
				"tags": [
					"top_client",
					"priority"
				],
				"source": "",
				"agent": {
					"id": 1234,
					"name": "",
					"full_name": "",
					"mobile_phone": "",
					"profile_image_url": "",
					"email": ""
				},
				"created_at": "",
				"updated_at": "",
				"emails": [
					{
						"type": "",
						"email": ""
					}
				],
				"phones": [
					{
						"type": "",
						"phone": ""
					}
				],
				"addresses": [
					{
						"type": "",
						"street": "",
						"city": "",
						"administrative_division": "",
						"country": "",
						"postal_code": ""
					}
				]
			} | null;
			title?: string;
			color?: string | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
