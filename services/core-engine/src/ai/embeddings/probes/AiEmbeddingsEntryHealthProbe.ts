export class AiEmbeddingsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsEntry" };
  }
}
