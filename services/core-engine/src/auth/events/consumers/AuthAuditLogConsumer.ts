export class AuthAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuthAuditLog created event for entity " + event.entityId + " in auth");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuthAuditLog updated event for entity " + event.entityId + " in auth");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AuthAuditLog deleted event for entity " + event.entityId + " in auth");
  }
}
