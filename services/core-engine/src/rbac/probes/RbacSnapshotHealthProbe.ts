export class RbacSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacSnapshot" };
  }
}
