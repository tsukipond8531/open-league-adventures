<script lang="ts">
	import { OrbitControls, useGltf, InstancedMeshes, Stars } from '@threlte/extras';

	import { Canvas, type CurrentWritable } from '@threlte/core';
	import { T } from '@threlte/core';
	import Knight from '$lib/assets/Models/Knight.svelte';
	import { AnimationAction, BoxGeometry, LoopOnce, MeshStandardMaterial } from 'three';
	import { injectLookAtPlugin } from '$lib/threlte.utils';
	import Button from '$lib/components/ui/button/button.svelte';
	import { tweened } from 'svelte/motion';

	import { bounceInOut, expoInOut } from 'svelte/easing';

	const meshes = new Array(5).fill(Knight);
	injectLookAtPlugin();

	let knightActions: CurrentWritable<Partial<Record<string, AnimationAction>>>;

	function playAttackAction() {
		const attackAction = $knightActions['1H_Melee_Attack_Chop']!;
		attackAction.repetitions = 1;

		attackAction.play();
		attackAction.getMixer().addEventListener('finished', () => {
			attackAction.stop();
		});
	}

	let target = [10, 0, 10];
	let lookTarget = target;

	function moveTo() {
		// let target = [5,0,5];
		lookTarget = target;
		const WalkAction = $knightActions['Walking_A']!;

		WalkAction.play();

		position.set(target);
		target = [...$position];
	}
	const position = tweened([3, 0, 3], {
		duration: 2000
		// easing: expoInOut
	});

	//let position = [3, 0, 3];
</script>

<Button
	on:click={() => {
		playAttackAction();
		//action.repetitions = 0;
		//action?.setLoop(AnimationAction, 1);
		//$knightActions['1H_Melee_Attack_Chop']?.stop();
	}}
>
	action
</Button>

<Button
	on:click={() => {
		moveTo();
		//action.repetitions = 0;
		//action?.setLoop(AnimationAction, 1);
		//$knightActions['1H_Melee_Attack_Chop']?.stop();
	}}
	>move
</Button>
<div class="h-full me">
	<Canvas>
		<Stars />

		<T.DirectionalLight position={[0, 10, 10]} castShadow />
		<T.AmbientLight intensity={0.2} castShadow />

		<T.Mesh
			receiveShadow
			geometry={new BoxGeometry(100, 1, 100)}
			position={[0, -0.5, 0]}
			material={new MeshStandardMaterial()}
		/>

		<T.PerspectiveCamera
			makeDefault
			position={[15, 15, 10]}
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
		<!-- <Gltf /> -->

		<Knight position={[1, 0, -3]} />
		<!-- <Knight position={[3, 3, 3]} /> -->
		<Knight position={$position} bind:actions={knightActions} lookAt={lookTarget} />
	</Canvas>
</div>

<style>
	.me {
		background-color: rgb(14 22 37 / 1);
	}
</style>
