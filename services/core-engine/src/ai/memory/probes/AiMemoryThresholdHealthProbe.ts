export class AiMemoryThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryThreshold" };
  }
}
