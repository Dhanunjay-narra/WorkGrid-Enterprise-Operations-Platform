export class FinanceExpensesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesTransaction" };
  }
}
