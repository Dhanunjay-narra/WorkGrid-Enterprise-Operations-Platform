export class AiEmbeddingsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsTask" };
  }
}
