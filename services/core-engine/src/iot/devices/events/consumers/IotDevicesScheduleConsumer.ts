export class IotDevicesScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSchedule created event for entity " + event.entityId + " in iot_devices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSchedule updated event for entity " + event.entityId + " in iot_devices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSchedule deleted event for entity " + event.entityId + " in iot_devices");
  }
}
