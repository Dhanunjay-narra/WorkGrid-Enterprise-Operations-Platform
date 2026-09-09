export class EventsDeadletterMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterMapping created event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterMapping updated event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterMapping deleted event for entity " + event.entityId + " in events_deadletter");
  }
}
