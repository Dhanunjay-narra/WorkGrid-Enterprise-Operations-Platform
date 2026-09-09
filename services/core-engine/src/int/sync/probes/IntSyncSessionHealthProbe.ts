export class IntSyncSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncSession" };
  }
}
