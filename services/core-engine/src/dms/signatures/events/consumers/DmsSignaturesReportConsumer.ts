export class DmsSignaturesReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesReport created event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesReport updated event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesReport deleted event for entity " + event.entityId + " in dms_signatures");
  }
}
