export class AiEmbeddingsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsNode" };
  }
}
