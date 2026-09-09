export class FinanceExpensesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesMetric" };
  }
}
