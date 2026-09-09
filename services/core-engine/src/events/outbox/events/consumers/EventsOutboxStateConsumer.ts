export class EventsOutboxStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxState created event for entity " + event.entityId + " in events_outbox");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxState updated event for entity " + event.entityId + " in events_outbox");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxState deleted event for entity " + event.entityId + " in events_outbox");
  }
}
