export class AiAgentsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsThreshold" };
  }
}
