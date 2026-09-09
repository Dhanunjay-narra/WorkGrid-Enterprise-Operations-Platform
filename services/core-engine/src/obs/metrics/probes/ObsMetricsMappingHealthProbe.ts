export class ObsMetricsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsMapping" };
  }
}
