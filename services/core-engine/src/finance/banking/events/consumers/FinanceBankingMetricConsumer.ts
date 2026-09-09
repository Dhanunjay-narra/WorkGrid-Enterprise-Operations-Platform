export class FinanceBankingMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBankingMetric created event for entity " + event.entityId + " in finance_banking");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBankingMetric updated event for entity " + event.entityId + " in finance_banking");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceBankingMetric deleted event for entity " + event.entityId + " in finance_banking");
  }
}
