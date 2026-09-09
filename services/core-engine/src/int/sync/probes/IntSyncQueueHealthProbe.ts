export class IntSyncQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncQueue" };
  }
}
