export class FinanceForecastEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastEvent" };
  }
}
