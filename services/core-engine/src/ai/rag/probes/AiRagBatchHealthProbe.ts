export class AiRagBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagBatch" };
  }
}
