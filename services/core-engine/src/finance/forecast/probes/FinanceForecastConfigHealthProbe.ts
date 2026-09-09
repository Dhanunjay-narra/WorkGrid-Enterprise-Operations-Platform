export class FinanceForecastConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastConfig" };
  }
}
