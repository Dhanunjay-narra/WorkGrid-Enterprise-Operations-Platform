export class IotFirmwareAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareAuditLog created event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareAuditLog updated event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareAuditLog deleted event for entity " + event.entityId + " in iot_firmware");
  }
}
