export class BiWidgetsThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsThreshold created event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsThreshold updated event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsThreshold deleted event for entity " + event.entityId + " in bi_widgets");
  }
}
