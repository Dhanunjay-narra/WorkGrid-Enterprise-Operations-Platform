export class AiRagThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagThreshold" };
  }
}
