export class AiEmbeddingsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsThreshold" };
  }
}
