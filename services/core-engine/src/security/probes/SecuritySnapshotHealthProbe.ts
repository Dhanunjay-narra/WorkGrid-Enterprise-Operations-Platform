export class SecuritySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecuritySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecuritySnapshot" };
  }
}
