export class ObsDashboardsQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsQueue created event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsQueue updated event for entity " + event.entityId + " in obs_dashboards");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsDashboardsQueue deleted event for entity " + event.entityId + " in obs_dashboards");
  }
}
