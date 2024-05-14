<script lang="ts">
    import { T } from '@threlte/core'
	import type { Writable } from 'svelte/store';
  
    // A normal html svelte component, no relation the Threlte
    export let label = ''
    export let count: number
  
    function click() {
      count++
    }
  </script>
  
  <button on:click={click}>
    {label} - {count}
  </button>
  
  <style>
    button {
      margin-left: 0.75rem;
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      pointer-events: auto;
  
      background-image: linear-gradient(#5e6cf4 0%, #1338db 100%);
    }
  </style>
  