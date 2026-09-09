export class IntRateLimitsConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsConfig created event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsConfig updated event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsConfig deleted event for entity " + event.entityId + " in int_rate_limits");
  }
}
