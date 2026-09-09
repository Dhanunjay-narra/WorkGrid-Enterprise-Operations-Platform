export class BiCohortsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsAuditLog created event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsAuditLog updated event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsAuditLog deleted event for entity " + event.entityId + " in bi_cohorts");
  }
}
