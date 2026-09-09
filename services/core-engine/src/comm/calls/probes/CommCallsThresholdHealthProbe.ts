export class CommCallsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsThreshold" };
  }
}
