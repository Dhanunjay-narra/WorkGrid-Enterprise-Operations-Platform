export class BiExportsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsAuditLog created event for entity " + event.entityId + " in bi_exports");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsAuditLog updated event for entity " + event.entityId + " in bi_exports");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsAuditLog deleted event for entity " + event.entityId + " in bi_exports");
  }
}
