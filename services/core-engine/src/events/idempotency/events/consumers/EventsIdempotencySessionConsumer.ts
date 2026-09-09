export class EventsIdempotencySessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySession created event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySession updated event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySession deleted event for entity " + event.entityId + " in events_idempotency");
  }
}
