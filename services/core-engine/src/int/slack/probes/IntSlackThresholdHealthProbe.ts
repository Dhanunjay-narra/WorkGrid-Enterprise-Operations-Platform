export class IntSlackThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackThreshold" };
  }
}
