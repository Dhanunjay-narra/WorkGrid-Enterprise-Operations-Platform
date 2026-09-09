export class IotFleetPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetPayload created event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetPayload updated event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetPayload deleted event for entity " + event.entityId + " in iot_fleet");
  }
}
