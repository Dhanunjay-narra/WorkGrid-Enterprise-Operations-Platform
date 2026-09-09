export class CommWebhooksPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksPolicy created event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksPolicy updated event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksPolicy deleted event for entity " + event.entityId + " in comm_webhooks");
  }
}
