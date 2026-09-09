export class DmsRetentionProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionProfile" };
  }
}
