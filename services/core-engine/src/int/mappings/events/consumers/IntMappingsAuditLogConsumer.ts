export class IntMappingsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsAuditLog created event for entity " + event.entityId + " in int_mappings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsAuditLog updated event for entity " + event.entityId + " in int_mappings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntMappingsAuditLog deleted event for entity " + event.entityId + " in int_mappings");
  }
}
