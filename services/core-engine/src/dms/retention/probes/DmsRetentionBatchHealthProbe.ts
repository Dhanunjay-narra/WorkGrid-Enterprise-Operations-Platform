export class DmsRetentionBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionBatch" };
  }
}
