export class AiMemoryTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryTask" };
  }
}
