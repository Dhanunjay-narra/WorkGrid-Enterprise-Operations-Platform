export class TenancyPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyPolicy created event for entity " + event.entityId + " in tenancy");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyPolicy updated event for entity " + event.entityId + " in tenancy");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancyPolicy deleted event for entity " + event.entityId + " in tenancy");
  }
}
