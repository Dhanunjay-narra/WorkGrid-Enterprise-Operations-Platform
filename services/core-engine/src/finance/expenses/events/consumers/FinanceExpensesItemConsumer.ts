export class FinanceExpensesItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesItem created event for entity " + event.entityId + " in finance_expenses");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesItem updated event for entity " + event.entityId + " in finance_expenses");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceExpensesItem deleted event for entity " + event.entityId + " in finance_expenses");
  }
}
