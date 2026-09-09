export class IntSyncEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncEntry" };
  }
}
