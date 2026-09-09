export class FinanceTaxesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesSchedule" };
  }
}
