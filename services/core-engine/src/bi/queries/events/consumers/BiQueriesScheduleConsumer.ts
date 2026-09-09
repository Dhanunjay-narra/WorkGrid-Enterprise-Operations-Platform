export class BiQueriesScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesSchedule created event for entity " + event.entityId + " in bi_queries");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesSchedule updated event for entity " + event.entityId + " in bi_queries");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesSchedule deleted event for entity " + event.entityId + " in bi_queries");
  }
}
