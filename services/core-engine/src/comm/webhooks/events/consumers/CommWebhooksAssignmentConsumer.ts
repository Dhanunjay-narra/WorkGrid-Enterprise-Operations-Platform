export class CommWebhooksAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksAssignment created event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksAssignment updated event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksAssignment deleted event for entity " + event.entityId + " in comm_webhooks");
  }
}
