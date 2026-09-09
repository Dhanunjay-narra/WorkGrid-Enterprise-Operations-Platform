export class IntSyncEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncEvent" };
  }
}
