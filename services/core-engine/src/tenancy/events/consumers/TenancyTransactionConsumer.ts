export class TenancyTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyTransaction created event for entity " + event.entityId + " in tenancy");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyTransaction updated event for entity " + event.entityId + " in tenancy");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyTransaction deleted event for entity " + event.entityId + " in tenancy");
  }
}
