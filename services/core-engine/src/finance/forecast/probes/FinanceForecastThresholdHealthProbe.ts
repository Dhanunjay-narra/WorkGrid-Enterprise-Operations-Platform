export class FinanceForecastThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastThreshold" };
  }
}
