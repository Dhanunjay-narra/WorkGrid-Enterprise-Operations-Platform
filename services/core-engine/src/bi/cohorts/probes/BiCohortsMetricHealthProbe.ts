export class BiCohortsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsMetric" };
  }
}
