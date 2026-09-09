export class FinanceTreasuryRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryRule created event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryRule updated event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryRule deleted event for entity " + event.entityId + " in finance_treasury");
  }
}
