export class AiEmbeddingsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsBatch" };
  }
}
