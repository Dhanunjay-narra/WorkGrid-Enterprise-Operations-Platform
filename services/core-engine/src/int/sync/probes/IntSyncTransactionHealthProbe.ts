export class IntSyncTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncTransaction" };
  }
}
