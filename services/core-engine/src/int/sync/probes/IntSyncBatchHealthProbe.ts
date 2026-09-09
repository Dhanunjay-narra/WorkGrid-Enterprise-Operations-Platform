export class IntSyncBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncBatch" };
  }
}
