<script lang="ts">
	import { OrbitControls, useGltf, InstancedMeshes } from '@threlte/extras';

	const gltf = useGltf('.storybook/Knight-transformed.glb', { useDraco: true });
</script>

{#if $gltf}
	<InstancedMeshes meshes={$gltf.nodes} let:components={{ Knight }}>
		<Knight />
	</InstancedMeshes>
{/if}
