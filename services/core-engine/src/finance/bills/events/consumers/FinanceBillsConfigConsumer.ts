export class FinanceBillsConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsConfig created event for entity " + event.entityId + " in finance_bills");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsConfig updated event for entity " + event.entityId + " in finance_bills");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBillsConfig deleted event for entity " + event.entityId + " in finance_bills");
  }
}
