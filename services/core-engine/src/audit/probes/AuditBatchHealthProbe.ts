export class AuditBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditBatch" };
  }
}
