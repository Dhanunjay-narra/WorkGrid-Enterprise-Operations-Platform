export class IotFirmwareTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareTransaction created event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareTransaction updated event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareTransaction deleted event for entity " + event.entityId + " in iot_firmware");
  }
}
