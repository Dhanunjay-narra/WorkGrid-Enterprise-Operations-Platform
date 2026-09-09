export class AuditAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuditAuditLog created event for entity " + event.entityId + " in audit");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuditAuditLog updated event for entity " + event.entityId + " in audit");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuditAuditLog deleted event for entity " + event.entityId + " in audit");
  }
}
