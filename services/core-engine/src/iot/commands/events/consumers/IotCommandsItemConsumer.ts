export class IotCommandsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsItem created event for entity " + event.entityId + " in iot_commands");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsItem updated event for entity " + event.entityId + " in iot_commands");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotCommandsItem deleted event for entity " + event.entityId + " in iot_commands");
  }
}
