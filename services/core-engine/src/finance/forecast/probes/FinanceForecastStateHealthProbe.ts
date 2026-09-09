export class FinanceForecastStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastState" };
  }
}
