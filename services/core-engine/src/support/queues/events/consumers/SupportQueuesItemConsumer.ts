export class SupportQueuesItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesItem created event for entity " + event.entityId + " in support_queues");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesItem updated event for entity " + event.entityId + " in support_queues");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportQueuesItem deleted event for entity " + event.entityId + " in support_queues");
  }
}
