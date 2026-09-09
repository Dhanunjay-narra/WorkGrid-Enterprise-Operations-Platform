export class IntWebhooksProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksProfile created event for entity " + event.entityId + " in int_webhooks");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksProfile updated event for entity " + event.entityId + " in int_webhooks");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntWebhooksProfile deleted event for entity " + event.entityId + " in int_webhooks");
  }
}
