export class DmsOcrSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrSummary created event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrSummary updated event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrSummary deleted event for entity " + event.entityId + " in dms_ocr");
  }
}
