<template>
	<div>
		<nav>
			<router-link to='/'>Home</router-link>
			<router-link :to="{name: 'about'}">About</router-link>
		</nav>
	</div>
</template>
<script>
	export default {

	}
</script>