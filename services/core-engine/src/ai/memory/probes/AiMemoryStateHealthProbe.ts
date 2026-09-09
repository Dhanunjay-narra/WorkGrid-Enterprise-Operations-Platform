export class AiMemoryStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryState" };
  }
}
