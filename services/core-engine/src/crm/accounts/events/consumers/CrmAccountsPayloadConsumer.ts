export class CrmAccountsPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsPayload created event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsPayload updated event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsPayload deleted event for entity " + event.entityId + " in crm_accounts");
  }
}
