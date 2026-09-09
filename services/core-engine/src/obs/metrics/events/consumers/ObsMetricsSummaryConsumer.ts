export class ObsMetricsSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsSummary created event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsSummary updated event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsSummary deleted event for entity " + event.entityId + " in obs_metrics");
  }
}
