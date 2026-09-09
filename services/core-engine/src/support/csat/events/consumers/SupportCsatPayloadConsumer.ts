export class SupportCsatPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatPayload created event for entity " + event.entityId + " in support_csat");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatPayload updated event for entity " + event.entityId + " in support_csat");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportCsatPayload deleted event for entity " + event.entityId + " in support_csat");
  }
}
