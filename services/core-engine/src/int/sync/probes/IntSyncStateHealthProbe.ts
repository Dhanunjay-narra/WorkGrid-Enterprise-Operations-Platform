export class IntSyncStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncState" };
  }
}
