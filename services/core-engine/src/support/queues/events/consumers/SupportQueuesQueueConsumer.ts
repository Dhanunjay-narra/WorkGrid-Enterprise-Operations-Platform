export class SupportQueuesQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesQueue created event for entity " + event.entityId + " in support_queues");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesQueue updated event for entity " + event.entityId + " in support_queues");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesQueue deleted event for entity " + event.entityId + " in support_queues");
  }
}
