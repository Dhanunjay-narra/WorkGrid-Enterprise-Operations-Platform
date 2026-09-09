export class BiExportsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsSnapshot" };
  }
}
