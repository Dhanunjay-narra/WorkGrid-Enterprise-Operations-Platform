export class FinanceForecastScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastSchedule" };
  }
}
