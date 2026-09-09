export class FinanceExpensesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesNode" };
  }
}
