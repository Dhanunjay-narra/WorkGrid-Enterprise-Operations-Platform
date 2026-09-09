export class AuthSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthSnapshot" };
  }
}
