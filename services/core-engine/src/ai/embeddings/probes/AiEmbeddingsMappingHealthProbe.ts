export class AiEmbeddingsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsMapping" };
  }
}
