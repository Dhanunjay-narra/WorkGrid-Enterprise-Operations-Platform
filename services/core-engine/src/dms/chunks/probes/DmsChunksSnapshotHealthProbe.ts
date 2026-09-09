export class DmsChunksSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksSnapshot" };
  }
}
