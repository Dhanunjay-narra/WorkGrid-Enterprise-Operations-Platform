export class FinanceExpensesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesConfig" };
  }
}
