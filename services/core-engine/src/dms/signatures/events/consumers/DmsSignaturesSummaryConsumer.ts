export class DmsSignaturesSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesSummary created event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesSummary updated event for entity " + event.entityId + " in dms_signatures");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsSignaturesSummary deleted event for entity " + event.entityId + " in dms_signatures");
  }
}
