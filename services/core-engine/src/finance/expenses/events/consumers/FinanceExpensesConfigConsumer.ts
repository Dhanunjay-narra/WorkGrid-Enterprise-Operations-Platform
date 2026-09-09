export class FinanceExpensesConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesConfig created event for entity " + event.entityId + " in finance_expenses");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesConfig updated event for entity " + event.entityId + " in finance_expenses");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesConfig deleted event for entity " + event.entityId + " in finance_expenses");
  }
}
