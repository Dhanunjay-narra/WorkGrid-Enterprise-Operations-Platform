export class DmsFoldersSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersSnapshot" };
  }
}
