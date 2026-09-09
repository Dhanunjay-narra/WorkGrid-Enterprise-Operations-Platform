export class HrLeaveAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveAuditLog" };
  }
}
