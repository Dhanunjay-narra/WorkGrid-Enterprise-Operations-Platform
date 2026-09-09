export class IntRateLimitsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsMetric created event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsMetric updated event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsMetric deleted event for entity " + event.entityId + " in int_rate_limits");
  }
}
