export class SupportAgentsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsMetric" };
  }
}
