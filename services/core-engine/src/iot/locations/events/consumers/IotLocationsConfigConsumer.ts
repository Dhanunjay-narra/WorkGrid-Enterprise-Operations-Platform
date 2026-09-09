export class IotLocationsConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsConfig created event for entity " + event.entityId + " in iot_locations");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsConfig updated event for entity " + event.entityId + " in iot_locations");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsConfig deleted event for entity " + event.entityId + " in iot_locations");
  }
}
