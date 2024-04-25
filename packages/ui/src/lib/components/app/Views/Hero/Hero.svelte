<script lang="ts">
	import frog from '$lib/assets/frog.png';
	
</script>

<!-- 
    @component
    View for a singular hero
 -->

<div class="h-[90svh] bg-contain bg-no-repeat relative" style="background-image: url({frog});">
	<div class="flex items-center">
		<div>Class Icon</div>

		<div class="ml-2">
			<div>Name</div>
			<div>subname?</div>
		</div>
	</div>

    <div class="absolute bottom-0 w-full">
        <div>
            actions (add to party)
        </div>

        <div>
            stats display
        </div>
    </div>
</div>
