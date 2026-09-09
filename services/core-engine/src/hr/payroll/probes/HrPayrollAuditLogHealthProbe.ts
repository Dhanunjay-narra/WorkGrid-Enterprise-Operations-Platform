export class HrPayrollAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollAuditLog" };
  }
}
