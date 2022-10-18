type EventType = string | number;

export type BaseEvents = Record<EventType, any[]>;

export class EventEmitter<Events extends BaseEvents> {
  private readonly events = new Map<keyof Events, any[]>();

  add<E extends keyof Events>(
    type: E,
    callback: (...args: Events[E]) => void
  ): any {
    const callbacks = this.events.get(type) || [];
    callbacks.push(callback);
    this.events.set(type, callbacks);
    return this;
  }

  remove<E extends keyof Events>(
    type: E,
    callback: (...args: Events[E]) => void
  ): any {
    const callbacks = this.events.get(type) || [];
    this.events.set(
      type,
      callbacks.filter((fn: any) => fn !== callback)
    );
    return this;
  }

  removeByType<E extends keyof Events>(type: E): any {
    this.events.delete(type);
    return this;
  }

  emit<E extends keyof Events>(type: E, ...args: Events[E]): any {
    const callbacks = this.events.get(type) || [];
    callbacks.forEach((fn) => {
      fn(...args);
    });
    return this;
  }

  listeners<E extends keyof Events>(type: E): any {
    return Object.freeze(this.events.get(type) || []);
  }
}
