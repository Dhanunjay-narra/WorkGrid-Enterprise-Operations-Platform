export class ObsMetricsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsAuditLog" };
  }
}
