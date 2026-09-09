export class ObsMetricsQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsQueue created event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsQueue updated event for entity " + event.entityId + " in obs_metrics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsMetricsQueue deleted event for entity " + event.entityId + " in obs_metrics");
  }
}
