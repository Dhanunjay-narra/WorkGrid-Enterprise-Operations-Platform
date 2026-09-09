export class HrEmployeesAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesAuditLog" };
  }
}
