export class DmsOcrProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrProfile created event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrProfile updated event for entity " + event.entityId + " in dms_ocr");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsOcrProfile deleted event for entity " + event.entityId + " in dms_ocr");
  }
}
