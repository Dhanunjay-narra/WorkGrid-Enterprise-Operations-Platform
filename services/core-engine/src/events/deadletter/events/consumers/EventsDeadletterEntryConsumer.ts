export class EventsDeadletterEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterEntry created event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterEntry updated event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterEntry deleted event for entity " + event.entityId + " in events_deadletter");
  }
}
