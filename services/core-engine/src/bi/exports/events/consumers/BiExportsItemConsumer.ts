export class BiExportsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsItem created event for entity " + event.entityId + " in bi_exports");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsItem updated event for entity " + event.entityId + " in bi_exports");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiExportsItem deleted event for entity " + event.entityId + " in bi_exports");
  }
}
