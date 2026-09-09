export class CommWebhooksTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksTransaction created event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksTransaction updated event for entity " + event.entityId + " in comm_webhooks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommWebhooksTransaction deleted event for entity " + event.entityId + " in comm_webhooks");
  }
}
