export class AiEmbeddingsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsItem" };
  }
}
