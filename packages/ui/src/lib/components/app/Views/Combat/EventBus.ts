export type MessageShape<T> = {
	id: number;
	payload: T;
};

export class EventBus<T> {
	private id = 0;
	private listeners: Map<string, ((message: T) => unknown)[]> = new Map();

	public subscribe(id: string, listener: (message: T) => unknown) {
		if (this.listeners.has(id)) {
			this.listeners.get(id)?.push(listener);
		} else {
			this.listeners.set(id, [listener]);
		}
	}

	public send(id: string, message: T) {
		if (this.listeners.has(id)) {
			this.listeners.get(id)!.forEach((listener) => listener(message));
		}
	}

	public unsubscribe(id: string, listener: (message: T) => unknown) {
		if (this.listeners.has(id)) {
			const listeners = this.listeners.get(id)!;
			const index = listeners.findIndex((l) => l === listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
		}
	}
}
