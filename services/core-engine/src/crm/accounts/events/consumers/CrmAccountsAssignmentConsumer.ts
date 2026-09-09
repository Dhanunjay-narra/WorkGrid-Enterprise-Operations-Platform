export class CrmAccountsAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsAssignment created event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsAssignment updated event for entity " + event.entityId + " in crm_accounts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmAccountsAssignment deleted event for entity " + event.entityId + " in crm_accounts");
  }
}
