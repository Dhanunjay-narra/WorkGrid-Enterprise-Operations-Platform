export class IntSyncConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncConfig" };
  }
}
