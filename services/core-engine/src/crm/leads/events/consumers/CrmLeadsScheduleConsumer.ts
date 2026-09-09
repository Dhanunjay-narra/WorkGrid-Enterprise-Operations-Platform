export class CrmLeadsScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsSchedule created event for entity " + event.entityId + " in crm_leads");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsSchedule updated event for entity " + event.entityId + " in crm_leads");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmLeadsSchedule deleted event for entity " + event.entityId + " in crm_leads");
  }
}
