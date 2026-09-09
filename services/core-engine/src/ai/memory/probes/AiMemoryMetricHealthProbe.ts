export class AiMemoryMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryMetric" };
  }
}
