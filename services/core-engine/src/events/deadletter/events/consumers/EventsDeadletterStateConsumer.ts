export class EventsDeadletterStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterState created event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterState updated event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterState deleted event for entity " + event.entityId + " in events_deadletter");
  }
}
