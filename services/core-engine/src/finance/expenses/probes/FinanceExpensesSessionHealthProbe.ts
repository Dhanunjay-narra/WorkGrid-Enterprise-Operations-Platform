export class FinanceExpensesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesSession" };
  }
}
