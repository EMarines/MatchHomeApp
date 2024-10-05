<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData

	$: properties = data.properties;
	$: contacts = data.contacts;

</script>

<h1>Home</h1>

<h1>Bienvenido {$page.data.userDisplay}</h1>

<h3>Gracias por permitirnos ayudarte a buscar tu nuevo hogar, actualmente tenemos un total de {properties.pagination.total } Propiedades en Inventario y estamos atendiendo a {contacts.pagination.total} de clientes registrados.</h3>

<style lang="scss">

	

</style>