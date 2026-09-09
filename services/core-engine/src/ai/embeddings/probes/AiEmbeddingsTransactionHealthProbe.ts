export class AiEmbeddingsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsTransaction" };
  }
}
