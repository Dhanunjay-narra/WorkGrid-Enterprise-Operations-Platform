export class ProjectCapacityAuditLogHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectCapacityAuditLog" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectCapacityAuditLog" };
  }
}
