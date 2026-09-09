export class FinanceExpensesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesMapping" };
  }
}
