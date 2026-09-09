export class FinanceLedgerThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerThreshold created event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerThreshold updated event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerThreshold deleted event for entity " + event.entityId + " in finance_ledger");
  }
}
