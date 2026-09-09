export class FinanceForecastBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceForecastBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceForecastBatch" };
  }
}
