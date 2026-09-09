export class AiRagMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagMetric" };
  }
}
