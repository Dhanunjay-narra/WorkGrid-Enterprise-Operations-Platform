export class BiCohortsReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsReport created event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsReport updated event for entity " + event.entityId + " in bi_cohorts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiCohortsReport deleted event for entity " + event.entityId + " in bi_cohorts");
  }
}
