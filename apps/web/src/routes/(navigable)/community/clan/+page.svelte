<script lang="ts">
	import { Views } from 'ui';

	const clans: Views.ClanSummary[] = [
		{
			description: 'description',
			id: 'id',
			name: 'name',
			power: 1000,
			rank: 1
		},
		{
			description: 'description 2',
			id: 'id',
			name: 'name 2',
			power: 1000,
			rank: 2
		},
		{
			description: 'description',
			id: 'id',
			name: 'name',
			power: 1000,
			rank: 1
		},
		{
			description: 'description 2',
			id: 'id',
			name: 'name 2',
			power: 1000,
			rank: 2
		},
		{
			description: 'description',
			id: 'id',
			name: 'name',
			power: 1000,
			rank: 1
		},
		{
			description: 'description 2',
			id: 'id',
			name: 'name 2',
			power: 1000,
			rank: 2
		},
		{
			description: 'description',
			id: 'id',
			name: 'name',
			power: 1000,
			rank: 1
		},
		{
			description: 'description 2',
			id: 'id',
			name: 'name 2',
			power: 1000,
			rank: 2
		}
	];
</script>

<div class="max-h-full overflow-y-auto">
	<Views.ClanLeaderboard {clans} />
</div>
