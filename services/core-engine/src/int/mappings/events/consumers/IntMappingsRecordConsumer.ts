export class IntMappingsRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsRecord created event for entity " + event.entityId + " in int_mappings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsRecord updated event for entity " + event.entityId + " in int_mappings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsRecord deleted event for entity " + event.entityId + " in int_mappings");
  }
}
