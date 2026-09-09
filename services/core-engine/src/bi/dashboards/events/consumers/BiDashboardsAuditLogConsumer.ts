export class BiDashboardsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsAuditLog created event for entity " + event.entityId + " in bi_dashboards");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsAuditLog updated event for entity " + event.entityId + " in bi_dashboards");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsAuditLog deleted event for entity " + event.entityId + " in bi_dashboards");
  }
}
