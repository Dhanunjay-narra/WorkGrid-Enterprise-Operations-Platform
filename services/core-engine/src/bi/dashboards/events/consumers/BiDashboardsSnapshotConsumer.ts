export class BiDashboardsSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsSnapshot created event for entity " + event.entityId + " in bi_dashboards");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsSnapshot updated event for entity " + event.entityId + " in bi_dashboards");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiDashboardsSnapshot deleted event for entity " + event.entityId + " in bi_dashboards");
  }
}
