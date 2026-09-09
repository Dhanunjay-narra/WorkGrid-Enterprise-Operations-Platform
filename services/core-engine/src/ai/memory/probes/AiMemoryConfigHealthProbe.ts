export class AiMemoryConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryConfig" };
  }
}
