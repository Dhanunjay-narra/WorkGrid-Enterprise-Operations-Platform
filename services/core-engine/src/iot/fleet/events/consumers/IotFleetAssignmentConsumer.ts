export class IotFleetAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetAssignment created event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetAssignment updated event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetAssignment deleted event for entity " + event.entityId + " in iot_fleet");
  }
}
