export class ObsMetricsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsBatch" };
  }
}
