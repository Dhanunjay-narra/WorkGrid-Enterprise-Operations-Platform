export class TenancyBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyBatch" };
  }
}
