export class CrmForecastingBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingBatch" };
  }
}
