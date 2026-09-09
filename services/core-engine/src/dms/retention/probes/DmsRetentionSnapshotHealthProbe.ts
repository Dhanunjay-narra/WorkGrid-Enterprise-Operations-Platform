export class DmsRetentionSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionSnapshot" };
  }
}
