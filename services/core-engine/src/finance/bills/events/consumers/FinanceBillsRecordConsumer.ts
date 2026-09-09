export class FinanceBillsRecordConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsRecord created event for entity " + event.entityId + " in finance_bills");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsRecord updated event for entity " + event.entityId + " in finance_bills");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsRecord deleted event for entity " + event.entityId + " in finance_bills");
  }
}
