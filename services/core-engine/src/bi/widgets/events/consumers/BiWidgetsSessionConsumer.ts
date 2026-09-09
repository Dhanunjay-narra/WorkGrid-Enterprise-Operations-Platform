export class BiWidgetsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsSession created event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsSession updated event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsSession deleted event for entity " + event.entityId + " in bi_widgets");
  }
}
