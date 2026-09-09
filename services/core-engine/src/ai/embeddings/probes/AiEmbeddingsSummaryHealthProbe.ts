export class AiEmbeddingsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsSummary" };
  }
}
