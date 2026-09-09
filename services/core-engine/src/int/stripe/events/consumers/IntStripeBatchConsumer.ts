export class IntStripeBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeBatch created event for entity " + event.entityId + " in int_stripe");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeBatch updated event for entity " + event.entityId + " in int_stripe");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntStripeBatch deleted event for entity " + event.entityId + " in int_stripe");
  }
}
