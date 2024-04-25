import {
	RequestStartFight,
	ServerFightMessage,
	FightServiceClient,
	ClientFightMessage
} from 'protos';


// TODO: implement message stubs
export function handleFightResponse(resp: ServerFightMessage) {
	const { payload } = resp;

	switch (payload.oneofKind) {
		case 'startFight':
			break;
		case 'endFight':
			break;
		case 'fightAction':
			break;
	}
}
