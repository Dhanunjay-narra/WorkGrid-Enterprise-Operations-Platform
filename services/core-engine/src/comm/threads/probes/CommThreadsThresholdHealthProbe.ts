export class CommThreadsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsThreshold" };
  }
}
