export class BiKpisProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisProfile created event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisProfile updated event for entity " + event.entityId + " in bi_kpis");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiKpisProfile deleted event for entity " + event.entityId + " in bi_kpis");
  }
}
