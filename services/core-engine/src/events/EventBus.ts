import { DomainEvent, UUID } from '@nexora/types';

export type EventHandler<T = any> = (event: DomainEvent<T>) => Promise<void> | void;

export class EventBus {
  private handlers = new Map<string, EventHandler[]>();

  public subscribe<T>(eventName: string, handler: EventHandler<T>): void {
    const list = this.handlers.get(eventName) || [];
    list.push(handler);
    this.handlers.set(eventName, list);
  }

  public async publish<T>(eventName: string, tenantId: UUID, payload: T): Promise<void> {
    const event: DomainEvent<T> = {
      id: 'evt_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      name: eventName,
      payload,
      occurredAt: new Date().toISOString()
    };

    const listeners = this.handlers.get(eventName) || [];
    for (const l of listeners) {
      await l(event);
    }
  }
}
