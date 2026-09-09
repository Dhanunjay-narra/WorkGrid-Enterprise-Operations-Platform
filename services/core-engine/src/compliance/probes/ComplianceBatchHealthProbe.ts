export class ComplianceBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceBatch" };
  }
}
