export class SupportAgentsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsThreshold" };
  }
}
