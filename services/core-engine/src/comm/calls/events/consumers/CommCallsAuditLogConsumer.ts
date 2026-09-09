export class CommCallsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsAuditLog created event for entity " + event.entityId + " in comm_calls");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsAuditLog updated event for entity " + event.entityId + " in comm_calls");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommCallsAuditLog deleted event for entity " + event.entityId + " in comm_calls");
  }
}
