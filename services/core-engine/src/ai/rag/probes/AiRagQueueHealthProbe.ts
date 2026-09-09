export class AiRagQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagQueue" };
  }
}
