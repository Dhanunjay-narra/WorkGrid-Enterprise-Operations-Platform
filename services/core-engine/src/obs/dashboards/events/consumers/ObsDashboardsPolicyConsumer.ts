export class ObsDashboardsPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsPolicy created event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsPolicy updated event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsPolicy deleted event for entity " + event.entityId + " in obs_dashboards");
  }
}
