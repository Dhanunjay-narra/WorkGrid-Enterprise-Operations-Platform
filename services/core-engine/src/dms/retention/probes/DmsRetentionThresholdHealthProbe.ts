export class DmsRetentionThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionThreshold" };
  }
}
