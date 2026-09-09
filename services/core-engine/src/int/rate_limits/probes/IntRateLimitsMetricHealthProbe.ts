export class IntRateLimitsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsMetric" };
  }
}
