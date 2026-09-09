export class FinanceExpensesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesReport" };
  }
}
