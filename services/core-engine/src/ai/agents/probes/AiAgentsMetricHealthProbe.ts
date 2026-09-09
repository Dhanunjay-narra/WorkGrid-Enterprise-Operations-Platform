export class AiAgentsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsMetric" };
  }
}
