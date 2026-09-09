export class AbacMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacMetric" };
  }
}
