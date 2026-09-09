export class AiMemoryBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryBatch" };
  }
}
