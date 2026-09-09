export class BiCohortsSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSnapshot created event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSnapshot updated event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSnapshot deleted event for entity " + event.entityId + " in bi_cohorts");
  }
}
