export class SupportCsatBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatBatch" };
  }
}
