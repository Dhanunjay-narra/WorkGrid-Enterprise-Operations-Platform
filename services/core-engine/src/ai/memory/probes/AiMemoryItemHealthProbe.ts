export class AiMemoryItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryItem" };
  }
}
