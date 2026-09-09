export class IotDevicesSnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSnapshot created event for entity " + event.entityId + " in iot_devices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSnapshot updated event for entity " + event.entityId + " in iot_devices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotDevicesSnapshot deleted event for entity " + event.entityId + " in iot_devices");
  }
}
