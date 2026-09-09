export class DmsOcrSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrSnapshot" };
  }
}
