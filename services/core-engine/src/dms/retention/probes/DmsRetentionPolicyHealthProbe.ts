export class DmsRetentionPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionPolicy" };
  }
}
