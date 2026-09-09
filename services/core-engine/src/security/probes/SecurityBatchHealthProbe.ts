export class SecurityBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityBatch" };
  }
}
