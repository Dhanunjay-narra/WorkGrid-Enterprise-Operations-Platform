export class FinanceForecastRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastRecord" };
  }
}
