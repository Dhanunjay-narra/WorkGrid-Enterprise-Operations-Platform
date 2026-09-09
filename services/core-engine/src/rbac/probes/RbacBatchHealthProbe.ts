export class RbacBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacBatch" };
  }
}
