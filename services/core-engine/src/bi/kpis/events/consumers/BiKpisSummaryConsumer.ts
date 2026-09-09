export class BiKpisSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisSummary created event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisSummary updated event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisSummary deleted event for entity " + event.entityId + " in bi_kpis");
  }
}
