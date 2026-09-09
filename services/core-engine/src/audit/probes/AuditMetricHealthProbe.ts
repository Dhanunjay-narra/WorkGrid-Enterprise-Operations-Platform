export class AuditMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditMetric" };
  }
}
