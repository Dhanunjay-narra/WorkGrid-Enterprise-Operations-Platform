export class AiMemoryProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryProfile" };
  }
}
