export class EventsOutboxPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxPolicy created event for entity " + event.entityId + " in events_outbox");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxPolicy updated event for entity " + event.entityId + " in events_outbox");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsOutboxPolicy deleted event for entity " + event.entityId + " in events_outbox");
  }
}
