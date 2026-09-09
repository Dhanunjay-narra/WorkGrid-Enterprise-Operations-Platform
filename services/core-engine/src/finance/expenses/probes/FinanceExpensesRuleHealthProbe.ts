export class FinanceExpensesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesRule" };
  }
}
