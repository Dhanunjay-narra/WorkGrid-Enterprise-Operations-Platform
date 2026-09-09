export class IotLocationsPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsPolicy created event for entity " + event.entityId + " in iot_locations");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsPolicy updated event for entity " + event.entityId + " in iot_locations");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsPolicy deleted event for entity " + event.entityId + " in iot_locations");
  }
}
