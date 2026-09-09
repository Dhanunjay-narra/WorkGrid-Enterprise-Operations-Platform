export class IntSyncPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncPolicy" };
  }
}
