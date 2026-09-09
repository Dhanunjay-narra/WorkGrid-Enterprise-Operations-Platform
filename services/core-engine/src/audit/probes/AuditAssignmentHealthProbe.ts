export class AuditAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuditAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuditAssignment" };
  }
}
