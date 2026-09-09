export class IntRateLimitsPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsPolicy created event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsPolicy updated event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsPolicy deleted event for entity " + event.entityId + " in int_rate_limits");
  }
}
