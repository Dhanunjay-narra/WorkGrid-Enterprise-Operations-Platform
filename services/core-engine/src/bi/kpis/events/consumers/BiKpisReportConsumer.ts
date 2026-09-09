export class BiKpisReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisReport created event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisReport updated event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisReport deleted event for entity " + event.entityId + " in bi_kpis");
  }
}
