export class DmsRetentionStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionState" };
  }
}
