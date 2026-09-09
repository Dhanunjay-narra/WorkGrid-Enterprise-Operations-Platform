export class FinanceExpensesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesRecord" };
  }
}
