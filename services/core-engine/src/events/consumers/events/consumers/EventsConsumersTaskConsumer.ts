export class EventsConsumersTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsConsumersTask created event for entity " + event.entityId + " in events_consumers");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsConsumersTask updated event for entity " + event.entityId + " in events_consumers");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsConsumersTask deleted event for entity " + event.entityId + " in events_consumers");
  }
}
