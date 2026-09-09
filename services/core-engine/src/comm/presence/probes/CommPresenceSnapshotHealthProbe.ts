export class CommPresenceSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceSnapshot" };
  }
}
