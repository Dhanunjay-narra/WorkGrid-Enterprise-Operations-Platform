export class ObsDashboardsReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsReport created event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsReport updated event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsReport deleted event for entity " + event.entityId + " in obs_dashboards");
  }
}
