export class EventsSchemaPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaPayload created event for entity " + event.entityId + " in events_schema");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaPayload updated event for entity " + event.entityId + " in events_schema");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsSchemaPayload deleted event for entity " + event.entityId + " in events_schema");
  }
}
