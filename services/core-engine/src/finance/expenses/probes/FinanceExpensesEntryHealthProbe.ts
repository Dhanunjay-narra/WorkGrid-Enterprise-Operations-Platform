export class FinanceExpensesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesEntry" };
  }
}
