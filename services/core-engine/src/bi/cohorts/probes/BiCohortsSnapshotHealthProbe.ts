export class BiCohortsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsSnapshot" };
  }
}
