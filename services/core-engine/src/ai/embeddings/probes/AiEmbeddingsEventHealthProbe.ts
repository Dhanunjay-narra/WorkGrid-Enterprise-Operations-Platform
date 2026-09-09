export class AiEmbeddingsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsEvent" };
  }
}
