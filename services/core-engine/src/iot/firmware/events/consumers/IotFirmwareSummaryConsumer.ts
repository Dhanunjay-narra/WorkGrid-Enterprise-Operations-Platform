export class IotFirmwareSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareSummary created event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareSummary updated event for entity " + event.entityId + " in iot_firmware");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFirmwareSummary deleted event for entity " + event.entityId + " in iot_firmware");
  }
}
