export class IotDevicesSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSession created event for entity " + event.entityId + " in iot_devices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSession updated event for entity " + event.entityId + " in iot_devices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSession deleted event for entity " + event.entityId + " in iot_devices");
  }
}
