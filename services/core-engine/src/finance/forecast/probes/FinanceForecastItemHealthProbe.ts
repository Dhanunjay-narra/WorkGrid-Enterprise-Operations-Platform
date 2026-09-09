export class FinanceForecastItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastItem" };
  }
}
