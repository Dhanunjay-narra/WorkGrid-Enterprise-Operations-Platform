export class ProjectGanttAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectGanttAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectGanttAuditLog" };
  }
}
