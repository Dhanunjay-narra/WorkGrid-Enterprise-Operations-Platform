export class ObsMetricsPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsPolicy created event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsPolicy updated event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsPolicy deleted event for entity " + event.entityId + " in obs_metrics");
  }
}
