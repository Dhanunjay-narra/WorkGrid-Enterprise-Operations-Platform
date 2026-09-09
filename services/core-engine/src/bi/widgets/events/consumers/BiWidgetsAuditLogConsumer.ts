export class BiWidgetsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsAuditLog created event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsAuditLog updated event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsAuditLog deleted event for entity " + event.entityId + " in bi_widgets");
  }
}
