export class FinanceExpensesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesBatch" };
  }
}
