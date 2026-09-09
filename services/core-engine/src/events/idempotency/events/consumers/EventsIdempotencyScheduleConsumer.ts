export class EventsIdempotencyScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySchedule created event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySchedule updated event for entity " + event.entityId + " in events_idempotency");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsIdempotencySchedule deleted event for entity " + event.entityId + " in events_idempotency");
  }
}
