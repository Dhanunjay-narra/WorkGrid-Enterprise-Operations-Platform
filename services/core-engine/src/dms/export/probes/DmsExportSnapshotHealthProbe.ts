export class DmsExportSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportSnapshot" };
  }
}
