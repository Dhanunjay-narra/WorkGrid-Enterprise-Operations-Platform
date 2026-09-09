export class IntWebhooksMappingConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksMapping created event for entity " + event.entityId + " in int_webhooks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksMapping updated event for entity " + event.entityId + " in int_webhooks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksMapping deleted event for entity " + event.entityId + " in int_webhooks");
  }
}
