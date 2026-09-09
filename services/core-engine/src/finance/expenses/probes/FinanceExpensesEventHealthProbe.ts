export class FinanceExpensesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesEvent" };
  }
}
