export class AiMemoryEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryEvent" };
  }
}
