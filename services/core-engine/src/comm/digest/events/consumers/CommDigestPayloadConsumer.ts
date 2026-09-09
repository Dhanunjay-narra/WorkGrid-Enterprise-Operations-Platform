export class CommDigestPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommDigestPayload created event for entity " + event.entityId + " in comm_digest");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommDigestPayload updated event for entity " + event.entityId + " in comm_digest");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommDigestPayload deleted event for entity " + event.entityId + " in comm_digest");
  }
}
