export class SupportQueuesPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesPayload created event for entity " + event.entityId + " in support_queues");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesPayload updated event for entity " + event.entityId + " in support_queues");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesPayload deleted event for entity " + event.entityId + " in support_queues");
  }
}
