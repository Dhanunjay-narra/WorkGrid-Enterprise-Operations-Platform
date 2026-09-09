export class EventsIdempotencyTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyTask created event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyTask updated event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyTask deleted event for entity " + event.entityId + " in events_idempotency");
  }
}
