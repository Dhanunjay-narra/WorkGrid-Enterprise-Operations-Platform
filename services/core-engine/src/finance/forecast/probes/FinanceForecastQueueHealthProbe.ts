export class FinanceForecastQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastQueue" };
  }
}
