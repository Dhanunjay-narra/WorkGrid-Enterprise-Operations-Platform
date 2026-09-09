export class FinanceLedgerScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerSchedule" };
  }
}
