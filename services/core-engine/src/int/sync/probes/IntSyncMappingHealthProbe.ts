export class IntSyncMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncMapping" };
  }
}
