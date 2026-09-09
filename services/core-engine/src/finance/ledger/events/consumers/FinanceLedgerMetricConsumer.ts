export class FinanceLedgerMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerMetric created event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerMetric updated event for entity " + event.entityId + " in finance_ledger");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceLedgerMetric deleted event for entity " + event.entityId + " in finance_ledger");
  }
}
