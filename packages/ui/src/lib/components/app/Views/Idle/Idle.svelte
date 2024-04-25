<script lang="ts">
	import { Canvas, type CurrentWritable } from '@threlte/core';
	import { T } from '@threlte/core';
	import Knight from '$lib/assets/Models/Knight.svelte';
	import { AnimationAction, BoxGeometry, MeshStandardMaterial } from 'three';
	import { injectLookAtPlugin } from '$lib/threlte.utils';
	import { RoundedBoxGeometry } from '@threlte/extras';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import CustomRenderer from '$lib/CustomRenderer.svelte';
	import Energy from '$lib/assets/Itemicon_Energy_0_Yellow.png';

	const meshes = new Array(5).fill(Knight);
	injectLookAtPlugin();

	let knightActions: CurrentWritable<Partial<Record<string, AnimationAction>>>;

	let cameraPosition: [x: number, y: number, z: number] = [10, 3, 10];
	let lookTarget = cameraPosition;
</script>

<div class="relative h-full border me">
	<Canvas>
		<T.DirectionalLight position={[0, 10, 10]} intensity={0.4} castShadow />
		<T.AmbientLight intensity={0.2} />
		<T.Mesh position={[1, 0, 1]}>
			<T.PointLight intensity={20} />
			<RoundedBoxGeometry />
			<T.MeshPhongMaterial color="hotpink" />
		</T.Mesh>

		<T.Mesh
			receiveShadow
			geometry={new BoxGeometry(100, 1, 100)}
			position={[0, -0.5, 0]}
			material={new MeshStandardMaterial()}
		/>

		<T.PerspectiveCamera
			makeDefault
			position={cameraPosition}
			on:create={({ ref }) => {
				ref.lookAt(0, 1, 0);
			}}
		></T.PerspectiveCamera>

		<Knight position={[1, 0, -3]} lookAt={lookTarget} />

		<Knight position={[-1, 0, 0]} bind:actions={knightActions} lookAt={lookTarget} />

		<Knight position={[0, 0, 3]} lookAt={lookTarget} />

		<Knight position={[4, 0, 0]} lookAt={lookTarget} />
	</Canvas>
	<div class="absolute z-10 flex flex-col items-center w-full bottom-10">
		<div class="flex flex-col items-center text-center font-fredoka">
			<div class="text-xs font-bold uppercase">Act 1</div>
			<div class="text-2xl font-semibold tracking-wider uppercase">The Test</div>
		</div>
		<button class="mx-auto mt-6 flex h-fit items-center {buttonVariants({ variant: 'default' })}">
			<img src={Energy} alt="Energy" class="mr-3 h-9 w-9" />
			<div class="text-left">
				<div class="text-lg">Play</div>
				<div>0 energy</div>
			</div>
		</button>
	</div>
</div>

<style>
	.me {
		background-color: rgb(14 22 37 / 1);
	}
</style>
