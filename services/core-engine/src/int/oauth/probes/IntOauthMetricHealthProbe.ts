export class IntOauthMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthMetric" };
  }
}
