export class DmsSignaturesTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesTask created event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesTask updated event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesTask deleted event for entity " + event.entityId + " in dms_signatures");
  }
}
