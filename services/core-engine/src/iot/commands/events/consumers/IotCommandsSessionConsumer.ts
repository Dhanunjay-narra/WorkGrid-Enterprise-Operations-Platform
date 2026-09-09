export class IotCommandsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsSession created event for entity " + event.entityId + " in iot_commands");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsSession updated event for entity " + event.entityId + " in iot_commands");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsSession deleted event for entity " + event.entityId + " in iot_commands");
  }
}
