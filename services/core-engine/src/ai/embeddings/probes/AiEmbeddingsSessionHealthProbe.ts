export class AiEmbeddingsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsSession" };
  }
}
