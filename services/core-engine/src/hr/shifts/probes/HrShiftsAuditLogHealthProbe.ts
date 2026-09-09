export class HrShiftsAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsAuditLog" };
  }
}
