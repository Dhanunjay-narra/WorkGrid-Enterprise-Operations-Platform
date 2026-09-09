export class IotFirmwareEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareEntry created event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareEntry updated event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareEntry deleted event for entity " + event.entityId + " in iot_firmware");
  }
}
