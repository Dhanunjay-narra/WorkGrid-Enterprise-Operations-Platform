export class FinanceExpensesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceExpensesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceExpensesSchedule" };
  }
}
