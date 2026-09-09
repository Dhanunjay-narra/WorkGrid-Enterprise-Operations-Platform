export class EventsSchemaRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaRecord created event for entity " + event.entityId + " in events_schema");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaRecord updated event for entity " + event.entityId + " in events_schema");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaRecord deleted event for entity " + event.entityId + " in events_schema");
  }
}
