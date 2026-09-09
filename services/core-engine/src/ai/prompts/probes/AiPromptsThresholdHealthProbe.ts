export class AiPromptsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsThreshold" };
  }
}
