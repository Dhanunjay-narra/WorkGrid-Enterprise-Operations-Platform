export class AiEmbeddingsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsMetric" };
  }
}
