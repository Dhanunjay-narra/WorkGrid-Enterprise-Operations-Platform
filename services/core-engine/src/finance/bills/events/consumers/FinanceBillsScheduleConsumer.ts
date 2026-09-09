export class FinanceBillsScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsSchedule created event for entity " + event.entityId + " in finance_bills");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsSchedule updated event for entity " + event.entityId + " in finance_bills");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsSchedule deleted event for entity " + event.entityId + " in finance_bills");
  }
}
