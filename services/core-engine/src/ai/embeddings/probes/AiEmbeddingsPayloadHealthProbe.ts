export class AiEmbeddingsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsPayload" };
  }
}
