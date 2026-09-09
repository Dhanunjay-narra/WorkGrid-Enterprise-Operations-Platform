export class IntMappingsBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsBatch created event for entity " + event.entityId + " in int_mappings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsBatch updated event for entity " + event.entityId + " in int_mappings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsBatch deleted event for entity " + event.entityId + " in int_mappings");
  }
}
