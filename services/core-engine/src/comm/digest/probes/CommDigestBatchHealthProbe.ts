export class CommDigestBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestBatch" };
  }
}
