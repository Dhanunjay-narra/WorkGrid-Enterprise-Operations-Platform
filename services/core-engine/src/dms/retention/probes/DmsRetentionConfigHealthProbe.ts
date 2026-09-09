export class DmsRetentionConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionConfig" };
  }
}
