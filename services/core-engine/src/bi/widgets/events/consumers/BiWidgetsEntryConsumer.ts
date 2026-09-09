export class BiWidgetsEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsEntry created event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsEntry updated event for entity " + event.entityId + " in bi_widgets");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiWidgetsEntry deleted event for entity " + event.entityId + " in bi_widgets");
  }
}
