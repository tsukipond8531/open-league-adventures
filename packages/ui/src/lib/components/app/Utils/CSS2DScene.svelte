<script lang="ts">
	import { T, useTask, useThrelte } from '@threlte/core';

	import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

	const { scene, size, autoRenderTask, camera } = useThrelte();
	const element = document.querySelector('#css-renderer-target') as HTMLElement;
	const cssRenderer = new CSS2DRenderer({ element });
	$: cssRenderer.setSize($size.width, $size.height);

	scene.matrixWorldAutoUpdate = false;

	useTask(
		() => {
			scene.updateMatrixWorld();
		},
		{ before: autoRenderTask }
	);
	useTask(
		() => {
			cssRenderer.render(scene, camera.current);
		},
		{
			after: autoRenderTask,
			autoInvalidate: false
		}
	);
</script>

<slot />
