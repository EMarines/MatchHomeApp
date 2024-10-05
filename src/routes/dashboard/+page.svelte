<script lang="ts">
	import { page } from '$app/stores'

	const properties = $page.data.properties;
	const contacts = $page.data.contacts;

	console.log($page.data, "desde page.svelte");

</script>


<h1>Bienvenido {$page.data.userDisplay} a tu Dashboard</h1>

<h3>Cada día temenmos que ser mejores, acualmente tenemos <strong>{properties.pagination.total}</strong>  Propiedades en Inventario y estamos atendiendo a <strong>{contacts.pagination.total}</strong> de clientes registrados</h3>


