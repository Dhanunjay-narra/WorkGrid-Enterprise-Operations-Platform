export class DmsOcrConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrConfig created event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrConfig updated event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrConfig deleted event for entity " + event.entityId + " in dms_ocr");
  }
}
