export class EventsDeadletterAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterAssignment created event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterAssignment updated event for entity " + event.entityId + " in events_deadletter");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsDeadletterAssignment deleted event for entity " + event.entityId + " in events_deadletter");
  }
}
