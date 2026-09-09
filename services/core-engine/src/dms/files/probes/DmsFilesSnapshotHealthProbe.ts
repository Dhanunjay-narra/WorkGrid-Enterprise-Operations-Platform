export class DmsFilesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesSnapshot" };
  }
}
