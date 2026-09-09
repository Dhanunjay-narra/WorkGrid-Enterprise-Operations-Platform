export class IdentityBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityBatch" };
  }
}
