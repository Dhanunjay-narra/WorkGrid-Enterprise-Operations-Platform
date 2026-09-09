export class CommCallsSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsSummary created event for entity " + event.entityId + " in comm_calls");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsSummary updated event for entity " + event.entityId + " in comm_calls");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsSummary deleted event for entity " + event.entityId + " in comm_calls");
  }
}
