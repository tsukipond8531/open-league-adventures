<script lang="ts">
	import { OrbitControls } from '@threlte/extras';

	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import Knight from '$lib/assets/Models/Knight.svelte';
</script>

<Canvas>
    <T.DirectionalLight position={[0, 10, 10]} />

	<T.PerspectiveCamera
		makeDefault
		position={[10, 10, 10]}
		on:create={({ ref }) => {
			ref.lookAt(0, 1, 0);
		}}
	>
		<OrbitControls />
	</T.PerspectiveCamera>
	<!-- 
	<T.Mesh>
		<T.BoxGeometry args={[1, 2, 1]} />
		<T.MeshBasicMaterial color="hotpink" />
	</T.Mesh>
     -->

	<Knight></Knight>
</Canvas>
