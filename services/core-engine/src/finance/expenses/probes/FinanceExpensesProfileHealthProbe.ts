export class FinanceExpensesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesProfile" };
  }
}
