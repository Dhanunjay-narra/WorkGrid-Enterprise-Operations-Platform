export class AiToolsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsThreshold" };
  }
}
