export class IotDevicesEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesEvent created event for entity " + event.entityId + " in iot_devices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesEvent updated event for entity " + event.entityId + " in iot_devices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesEvent deleted event for entity " + event.entityId + " in iot_devices");
  }
}
