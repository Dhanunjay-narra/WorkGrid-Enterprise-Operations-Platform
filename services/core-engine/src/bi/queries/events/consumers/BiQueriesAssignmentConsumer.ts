export class BiQueriesAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesAssignment created event for entity " + event.entityId + " in bi_queries");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesAssignment updated event for entity " + event.entityId + " in bi_queries");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesAssignment deleted event for entity " + event.entityId + " in bi_queries");
  }
}
