export class AiEmbeddingsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsQueue" };
  }
}
