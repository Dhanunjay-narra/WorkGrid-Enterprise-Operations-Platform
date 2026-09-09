export class EventsIdempotencyQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyQueue created event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyQueue updated event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyQueue deleted event for entity " + event.entityId + " in events_idempotency");
  }
}
