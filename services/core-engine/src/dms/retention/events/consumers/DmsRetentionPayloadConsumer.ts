export class DmsRetentionPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPayload created event for entity " + event.entityId + " in dms_retention");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPayload updated event for entity " + event.entityId + " in dms_retention");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionPayload deleted event for entity " + event.entityId + " in dms_retention");
  }
}
