export class FinanceExpensesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesThreshold" };
  }
}
