export class IntStripeEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeEntry created event for entity " + event.entityId + " in int_stripe");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeEntry updated event for entity " + event.entityId + " in int_stripe");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeEntry deleted event for entity " + event.entityId + " in int_stripe");
  }
}
