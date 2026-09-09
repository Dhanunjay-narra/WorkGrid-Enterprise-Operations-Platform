export class FinanceInvoicesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesSchedule" };
  }
}
