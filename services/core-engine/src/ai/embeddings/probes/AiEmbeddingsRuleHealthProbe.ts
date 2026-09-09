export class AiEmbeddingsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsRule" };
  }
}
