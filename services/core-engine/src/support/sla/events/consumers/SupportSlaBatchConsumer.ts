export class SupportSlaBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaBatch created event for entity " + event.entityId + " in support_sla");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaBatch updated event for entity " + event.entityId + " in support_sla");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportSlaBatch deleted event for entity " + event.entityId + " in support_sla");
  }
}
