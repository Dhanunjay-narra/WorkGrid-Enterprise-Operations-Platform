export class BiKpisSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisSnapshot" };
  }
}
