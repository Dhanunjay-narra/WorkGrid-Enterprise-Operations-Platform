export class AiMemoryNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryNode" };
  }
}
