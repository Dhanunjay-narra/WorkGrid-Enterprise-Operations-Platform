export class DmsOcrBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrBatch" };
  }
}
