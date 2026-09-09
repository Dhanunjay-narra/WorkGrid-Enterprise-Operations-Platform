export class RbacMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacMetric" };
  }
}
