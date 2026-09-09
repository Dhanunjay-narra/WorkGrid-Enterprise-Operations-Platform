export class IotDevicesStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesState created event for entity " + event.entityId + " in iot_devices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesState updated event for entity " + event.entityId + " in iot_devices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesState deleted event for entity " + event.entityId + " in iot_devices");
  }
}
