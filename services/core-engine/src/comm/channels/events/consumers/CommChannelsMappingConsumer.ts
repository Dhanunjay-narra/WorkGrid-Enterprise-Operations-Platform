export class CommChannelsMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommChannelsMapping created event for entity " + event.entityId + " in comm_channels");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommChannelsMapping updated event for entity " + event.entityId + " in comm_channels");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommChannelsMapping deleted event for entity " + event.entityId + " in comm_channels");
  }
}
