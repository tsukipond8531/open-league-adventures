<script lang="ts">
	import { Views } from 'ui';
	export let data;

	const clans_from_db: Views.ClanSummary = data.clans?.map((c, i) => {
		return {
			description: c.description ?? null,
			id: c.clan?.id,
			name: c.clanname,
			power: c.clanpower,
			rank: i + 1
		};
	});
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
	<Views.ClanLeaderboard
		clans={clans_from_db}
		userClan={data.playerClan
			? {
					description: null,
					id: data.playerClan?.clanid,
					name: data.playerClan?.clanname,
					power: data.playerClan?.clanpower,
					rank: data.playerClan?.rank +1
				}
			: null}
	/>
</div>
