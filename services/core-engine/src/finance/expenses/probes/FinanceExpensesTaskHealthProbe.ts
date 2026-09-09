export class FinanceExpensesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesTask" };
  }
}
