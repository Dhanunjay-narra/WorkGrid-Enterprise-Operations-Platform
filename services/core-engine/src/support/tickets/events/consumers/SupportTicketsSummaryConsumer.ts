export class SupportTicketsSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportTicketsSummary created event for entity " + event.entityId + " in support_tickets");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportTicketsSummary updated event for entity " + event.entityId + " in support_tickets");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportTicketsSummary deleted event for entity " + event.entityId + " in support_tickets");
  }
}
