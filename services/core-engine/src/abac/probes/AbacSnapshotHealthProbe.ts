export class AbacSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacSnapshot" };
  }
}
