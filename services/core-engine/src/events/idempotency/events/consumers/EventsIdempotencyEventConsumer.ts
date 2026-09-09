export class EventsIdempotencyEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyEvent created event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyEvent updated event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencyEvent deleted event for entity " + event.entityId + " in events_idempotency");
  }
}
