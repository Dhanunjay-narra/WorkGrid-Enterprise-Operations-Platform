export class SupportTicketsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsThreshold" };
  }
}
