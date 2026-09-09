export class FinanceForecastMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastMetric" };
  }
}
