export class EventsOutboxRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxRecord created event for entity " + event.entityId + " in events_outbox");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxRecord updated event for entity " + event.entityId + " in events_outbox");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxRecord deleted event for entity " + event.entityId + " in events_outbox");
  }
}
