export class CommThreadsAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsAssignment created event for entity " + event.entityId + " in comm_threads");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsAssignment updated event for entity " + event.entityId + " in comm_threads");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommThreadsAssignment deleted event for entity " + event.entityId + " in comm_threads");
  }
}
