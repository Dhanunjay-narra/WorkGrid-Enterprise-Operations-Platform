export class FinanceTreasurySnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasurySnapshot created event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasurySnapshot updated event for entity " + event.entityId + " in finance_treasury");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTreasurySnapshot deleted event for entity " + event.entityId + " in finance_treasury");
  }
}
