export class IntRateLimitsQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsQueue created event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsQueue updated event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsQueue deleted event for entity " + event.entityId + " in int_rate_limits");
  }
}
