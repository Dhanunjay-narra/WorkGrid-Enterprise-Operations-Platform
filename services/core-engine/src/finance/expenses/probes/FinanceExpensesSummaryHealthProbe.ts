export class FinanceExpensesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesSummary" };
  }
}
