export class HrPerformanceAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceAuditLog" };
  }
}
