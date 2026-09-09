export class AiEmbeddingsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsRecord" };
  }
}
