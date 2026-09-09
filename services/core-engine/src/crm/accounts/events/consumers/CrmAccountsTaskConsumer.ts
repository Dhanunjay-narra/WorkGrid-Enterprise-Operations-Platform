export class CrmAccountsTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsTask created event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsTask updated event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsTask deleted event for entity " + event.entityId + " in crm_accounts");
  }
}
