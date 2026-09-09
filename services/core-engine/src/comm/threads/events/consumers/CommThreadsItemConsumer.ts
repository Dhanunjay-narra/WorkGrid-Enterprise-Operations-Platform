export class CommThreadsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsItem created event for entity " + event.entityId + " in comm_threads");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsItem updated event for entity " + event.entityId + " in comm_threads");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsItem deleted event for entity " + event.entityId + " in comm_threads");
  }
}
