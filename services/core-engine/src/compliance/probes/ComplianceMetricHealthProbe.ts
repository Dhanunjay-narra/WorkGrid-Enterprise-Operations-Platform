export class ComplianceMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceMetric" };
  }
}
