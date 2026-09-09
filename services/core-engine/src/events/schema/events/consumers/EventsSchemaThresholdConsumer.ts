export class EventsSchemaThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaThreshold created event for entity " + event.entityId + " in events_schema");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaThreshold updated event for entity " + event.entityId + " in events_schema");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaThreshold deleted event for entity " + event.entityId + " in events_schema");
  }
}
