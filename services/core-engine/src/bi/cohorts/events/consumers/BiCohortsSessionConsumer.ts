export class BiCohortsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSession created event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSession updated event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsSession deleted event for entity " + event.entityId + " in bi_cohorts");
  }
}
