export class CrmDealsScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsSchedule created event for entity " + event.entityId + " in crm_deals");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsSchedule updated event for entity " + event.entityId + " in crm_deals");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsSchedule deleted event for entity " + event.entityId + " in crm_deals");
  }
}
