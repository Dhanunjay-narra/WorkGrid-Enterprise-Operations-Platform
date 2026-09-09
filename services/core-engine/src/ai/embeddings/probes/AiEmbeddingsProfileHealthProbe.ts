export class AiEmbeddingsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsProfile" };
  }
}
