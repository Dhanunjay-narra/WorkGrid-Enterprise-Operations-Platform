export class FinanceExpensesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesPolicy" };
  }
}
