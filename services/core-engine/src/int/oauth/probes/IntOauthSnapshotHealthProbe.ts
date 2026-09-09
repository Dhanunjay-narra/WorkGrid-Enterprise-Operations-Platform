export class IntOauthSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthSnapshot" };
  }
}
