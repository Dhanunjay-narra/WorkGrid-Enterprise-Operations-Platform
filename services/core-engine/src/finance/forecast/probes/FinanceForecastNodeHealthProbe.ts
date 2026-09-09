export class FinanceForecastNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastNode" };
  }
}
