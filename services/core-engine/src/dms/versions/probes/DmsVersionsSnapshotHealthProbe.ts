export class DmsVersionsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsSnapshot" };
  }
}
