export class FinanceTaxesScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesSchedule created event for entity " + event.entityId + " in finance_taxes");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesSchedule updated event for entity " + event.entityId + " in finance_taxes");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesSchedule deleted event for entity " + event.entityId + " in finance_taxes");
  }
}
