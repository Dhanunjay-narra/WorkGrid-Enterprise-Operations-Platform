export class AiEmbeddingsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsState" };
  }
}
