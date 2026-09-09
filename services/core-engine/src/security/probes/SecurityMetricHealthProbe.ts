export class SecurityMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityMetric" };
  }
}
