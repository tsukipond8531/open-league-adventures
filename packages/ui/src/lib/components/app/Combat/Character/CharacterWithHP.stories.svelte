<script context="module" lang="ts">
	import CharacterWithHP from './CharacterWithHP.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Combat/Combat/Single Character',
		component: CharacterWithHP,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<CharacterWithHP>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';

	import type { Meta, StoryObj } from '@storybook/svelte';
	import { onMount, setContext } from 'svelte';
	import { type Writable, writable } from 'svelte/store';
	import Overlay from '../../Combat/Overlay.svelte';
	import type { CharacterState } from '../../Views/Combat/combat.types';
	import Css2DScene from '../../Utils/CSS2DScene.svelte';
	import CharacterWithHp from './CharacterWithHP.svelte';

	type Story = StoryObj<typeof meta>;

	let character: CharacterState & { model: string } = {
		currentHP: 100,
		maxHP: 100,
		model: 'Knight'
	};
	let cameraPosition: [x: number, y: number, z: number] = [10, 3, 10];

	const currentHP = writable(character.currentHP);
</script>

<Template let:args>
	<div class="relative max-w-sm border border-red-500 h-96">
		<div id="css-renderer-target" />

		<button
			class="z-50"
			on:click={() => {
				$currentHP = $currentHP - 100;
			}}>Reduce health</button
		>
		<Canvas>
			<Css2DScene>
				<T.DirectionalLight position={[0, 10, 10]} intensity={0.4} castShadow />
				<T.AmbientLight intensity={0.6} />

				<T.PerspectiveCamera
					makeDefault
					position={cameraPosition}
					on:create={({ ref }) => {
						ref.lookAt(0, 1, 0);
					}}
				></T.PerspectiveCamera>
				<CharacterWithHP {...args}></CharacterWithHP>
				<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
					<T.CircleGeometry args={[6, 40]} />
					<T.MeshStandardMaterial color="white" />
				</T.Mesh>
			</Css2DScene>
		</Canvas>
	</div>
</Template>

<Story name="Full Life" args={{ ...character, position: [0, 0, 0], currentHP: currentHP }}></Story>

<Story name="No args">
	<div class="relative max-w-sm border border-red-500 h-96">
		<div id="css-renderer-target" />
		<button
			class="z-50"
			on:click
			on:click={() => {
				$currentHP = $currentHP - 10;
			}}>Reduce health</button
		>
		<Canvas>
			<Css2DScene>
				<T.DirectionalLight position={[0, 10, 10]} intensity={0.4} castShadow />
				<T.AmbientLight intensity={0.6} />

				<T.PerspectiveCamera
					makeDefault
					position={cameraPosition}
					on:create={({ ref }) => {
						ref.lookAt(0, 1, 0);
					}}
				></T.PerspectiveCamera>
				<CharacterWithHp
					{currentHP}
					maxHP={character.maxHP}
					model={character.model}
					position={[0, 0, 0]}
				></CharacterWithHp>
				<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
					<T.CircleGeometry args={[6, 40]} />
					<T.MeshStandardMaterial color="white" />
				</T.Mesh>
			</Css2DScene>
		</Canvas>
	</div>
</Story>

<style>
	#css-renderer-target {
		left: 0;
		position: absolute;
		pointer-events: none;
		top: 0;
	}
</style>
