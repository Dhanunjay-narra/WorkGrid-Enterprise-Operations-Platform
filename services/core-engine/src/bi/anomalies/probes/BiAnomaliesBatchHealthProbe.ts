export class BiAnomaliesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesBatch" };
  }
}
