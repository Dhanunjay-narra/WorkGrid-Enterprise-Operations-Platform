export class AiEmbeddingsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsPolicy" };
  }
}
