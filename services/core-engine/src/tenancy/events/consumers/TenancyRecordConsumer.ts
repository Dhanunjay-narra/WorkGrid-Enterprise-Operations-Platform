export class TenancyRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyRecord created event for entity " + event.entityId + " in tenancy");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyRecord updated event for entity " + event.entityId + " in tenancy");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyRecord deleted event for entity " + event.entityId + " in tenancy");
  }
}
