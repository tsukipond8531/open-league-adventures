import { expect, test } from 'vitest';
import { EventBus, type MessageShape } from './EventBus';

test('Can Instantiate the class', () => {
	const bus = new EventBus();
	expect(bus).toBeTruthy();
});

test('Can add a listener', () => {
	const bus = new EventBus();
	bus.subscribe('test', () => {});
	expect(bus).toBeTruthy();
});

test('Can add a listener and add it', () => {
	const bus = new EventBus();
	const listener = (message: MessageShape<null>) => {
		return message;
	};
	bus.subscribe('test', listener);

	expect(bus).toBeTruthy();
});

test('Can add a listener and send something to it', () => {
	const bus = new EventBus();
	const listener = (message: MessageShape<null>) => {
		console.dir(message);
	};
	bus.subscribe('test', listener);

	bus.send('test', { id: 1, payload: null });

	expect(bus).toBeTruthy();
});

test('Can unsubscribe', () => {
	const bus = new EventBus();
	const listener = (message: MessageShape<null>) => {
		console.dir(message);
	};
	bus.subscribe('test', listener);
	bus.unsubscribe('test', listener);
	bus.send('test', { id: 1, payload: null });

	expect(bus).toBeTruthy();
});
