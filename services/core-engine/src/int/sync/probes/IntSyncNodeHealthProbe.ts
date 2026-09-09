export class IntSyncNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncNode" };
  }
}
