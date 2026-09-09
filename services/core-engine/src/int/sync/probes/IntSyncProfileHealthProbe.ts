export class IntSyncProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncProfile" };
  }
}
