export class CrmLeadsPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsPolicy created event for entity " + event.entityId + " in crm_leads");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsPolicy updated event for entity " + event.entityId + " in crm_leads");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsPolicy deleted event for entity " + event.entityId + " in crm_leads");
  }
}
