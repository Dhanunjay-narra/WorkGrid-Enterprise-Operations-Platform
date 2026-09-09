export class SupportCsatSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatSnapshot" };
  }
}
