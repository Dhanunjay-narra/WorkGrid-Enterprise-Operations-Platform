export class FinanceExpensesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesQueue" };
  }
}
