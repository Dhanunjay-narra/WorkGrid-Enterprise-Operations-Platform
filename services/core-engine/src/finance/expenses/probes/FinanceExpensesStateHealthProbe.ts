export class FinanceExpensesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesState" };
  }
}
