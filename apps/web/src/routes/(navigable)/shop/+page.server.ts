import type { PageServerLoad } from './$types';

export const load = (async () => {
	// TODO: fetch store offers

	const offer = {
		title: 'Chest of Coins and Gems',
		price: 10,
		image: '/IconGroup_ShopIcon_Chest.png',
		description: '10k Coin + 2k Gems',
		id: 'store-offer-id'
	};

	const shopOffers = [
		{
			section: {
				title: 'Bundle',
				color: 'blue'
			},
			items: [
				{
					title: 'Chest of Coins and Gems',
					price: 10,
					image: '/IconGroup_ShopIcon_Chest.png',
					description: '10k Coin + 2k Gems',
					id: 'store-offer-id'
				}
			]
		},
		{
			section: {
				title: 'Gold',
				color: 'blue'
			},
			items: [
				{
					title: 'Chest of Coins',
					price: 10,
					image: '/IconGroup_ShopIcon_Chest.png',
					description: '10k Coin + 2k Gems',
					id: 'store-offer-id'
				}
			]
		}
	];

	return {
		offers: shopOffers
	};
}) satisfies PageServerLoad;
