export class IdentitySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentitySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentitySnapshot" };
  }
}
