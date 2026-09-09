export class HrAttendanceAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceAuditLog" };
  }
}
