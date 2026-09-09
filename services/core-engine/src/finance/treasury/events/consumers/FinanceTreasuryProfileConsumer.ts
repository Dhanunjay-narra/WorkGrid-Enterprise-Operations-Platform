export class FinanceTreasuryProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryProfile created event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryProfile updated event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasuryProfile deleted event for entity " + event.entityId + " in finance_treasury");
  }
}
