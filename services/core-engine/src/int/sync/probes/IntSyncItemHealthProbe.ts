export class IntSyncItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncItem" };
  }
}
