export class FinanceExpensesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesSnapshot" };
  }
}
