export class SupportEscalationThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportEscalationThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportEscalationThreshold" };
  }
}
