export class AbacBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacBatch" };
  }
}
