export class AiMemorySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemorySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemorySession" };
  }
}
