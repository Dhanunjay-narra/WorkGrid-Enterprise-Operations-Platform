export class AuthMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthMetric" };
  }
}
