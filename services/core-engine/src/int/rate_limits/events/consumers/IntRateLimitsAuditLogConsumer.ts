export class IntRateLimitsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsAuditLog created event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsAuditLog updated event for entity " + event.entityId + " in int_rate_limits");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntRateLimitsAuditLog deleted event for entity " + event.entityId + " in int_rate_limits");
  }
}
