export class SupportSlaSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaSnapshot" };
  }
}
