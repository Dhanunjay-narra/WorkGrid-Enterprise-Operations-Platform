export class FinanceLedgerQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerQueue created event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerQueue updated event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerQueue deleted event for entity " + event.entityId + " in finance_ledger");
  }
}
