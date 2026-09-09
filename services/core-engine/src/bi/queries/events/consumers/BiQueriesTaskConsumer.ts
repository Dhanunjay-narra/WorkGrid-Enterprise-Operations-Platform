export class BiQueriesTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesTask created event for entity " + event.entityId + " in bi_queries");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesTask updated event for entity " + event.entityId + " in bi_queries");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiQueriesTask deleted event for entity " + event.entityId + " in bi_queries");
  }
}
