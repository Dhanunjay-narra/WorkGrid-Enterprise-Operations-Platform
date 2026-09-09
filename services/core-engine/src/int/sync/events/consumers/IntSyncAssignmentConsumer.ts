export class IntSyncAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSyncAssignment created event for entity " + event.entityId + " in int_sync");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSyncAssignment updated event for entity " + event.entityId + " in int_sync");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntSyncAssignment deleted event for entity " + event.entityId + " in int_sync");
  }
}
