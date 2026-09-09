export class IdentityMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityMetric" };
  }
}
