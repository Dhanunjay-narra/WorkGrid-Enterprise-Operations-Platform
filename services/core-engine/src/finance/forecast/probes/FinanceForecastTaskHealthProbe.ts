export class FinanceForecastTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastTask" };
  }
}
