export class AiMemoryQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryQueue" };
  }
}
